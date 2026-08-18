import { useState } from "react"
import api from "../api/api";

function Account(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();

        const response = await api.post("/api/token/", {
            username,
            password,
        })
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh); 
        };
        
        return <div className="flex w-full flex-1 items-center justify-center pb-30">
            <div className="w-full max-w-lg rounded-xl bg-surface p-10">
                <h1 className="mb-8 text-4xl font-bold text-primary">Account</h1>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <label className="block">
                        <span className="mb-2 block text-lg">Username</span>
                        <input
                            type="text"
                            className="w-full rounded-lg border border-text/10 bg-background px-4 py-3 text-text outline-none"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>

                    <label className="block">
                        <span className="mb-2 block text-lg">Password</span>
                        <input
                            type="password"
                            className="w-full rounded-lg border border-text/10 bg-background px-4 py-3 text-text outline-none"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>

                    <button type="submit" className="w-full rounded-lg bg-primary py-3 font-bold text-background hover:bg-secondary duration-150 cursor-pointer ">
                        Register
                    </button>

                    <p className="text-center text-text/60">or login</p>
                </form>
            </div>
        </div>

    }

    

export default Account
