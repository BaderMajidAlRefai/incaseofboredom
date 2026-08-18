import { NavLink } from "react-router"

function Header(){
    const linkStyle = "rounded-md px-2 py-1 text-xl transition-colors hover:bg-text/5"

    return <div className="flex gap-5 pl-4 pr-4 bg-surface h-15 items-center sticky top-0 z-50">
        <h1 className= "text-primary text-4xl">In Case of Boredom</h1>
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/discover" className={linkStyle}>Discover</NavLink>
        <NavLink to="/account" className={linkStyle}>Account</NavLink>
        <input
          type="search"
          className="absolute left-1/2 w-80 -translate-x-1/2 rounded-lg bg-background px-4 py-2 text-text outline-none placeholder:text-text/50"
          placeholder="Browse slots..."
          aria-label="Browse slots"
        />
    </div>
}

export default Header
