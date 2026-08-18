import Header from "./Header"

function Base({children}: {children:React.ReactNode}){
    return <div className="pattern-background min-h-screen w-full flex flex-col">
        <Header/>
        <div className="mx-auto flex w-full max-w-7xl flex-1 pt-30">
            { children }
        </div>
    </div>
}

export default Base
