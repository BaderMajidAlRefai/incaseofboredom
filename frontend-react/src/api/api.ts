import axios from 'axios'

const api = axios.create({
    baseURL: "http://127.0.0.1:8000",
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access")

    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config
})

api.interceptors.response.use(
    (response) => {
        return response
    },

    async (error) => {
        if (error.response?.status == 401){
            const refreshToken = localStorage.getItem("refresh");
            if (!refreshToken) {
                localStorage.removeItem("access");
                return Promise.reject(error);
            }

            try {
                const response = await axios.post("http://127.0.0.1:8000/api/refresh/", {
                        refresh : refreshToken
                    }
                )
                localStorage.setItem('access', response.data.access);
                const originalRequest = error.config 
                return api(originalRequest); 
            }             
            catch(refreshError){
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                return Promise.reject(refreshError);
            } 

        }
        return Promise.reject(error)
    }
)

export default api