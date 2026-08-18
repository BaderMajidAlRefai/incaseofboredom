function Header(){
    return <div className="relative flex gap-5 pl-4 pr-4 bg-surface h-15 items-center sticky top-0 z-50">
        <h1 className= "text-primary text-4xl">In Case of Boredom</h1>
        <h1 className="cursor-pointer transition-transform hover:scale-105 text-xl">Home</h1>
        <h1 className="cursor-pointer transition-transform hover:scale-105 text-xl">Discover</h1>
        <h1 className="cursor-pointer transition-transform hover:scale-105 text-xl">Account</h1>
        <input
          type="search"
          className="absolute left-1/2 w-80 -translate-x-1/2 rounded-lg bg-background px-4 py-2 text-text outline-none placeholder:text-text/50"
          placeholder="Browse slots..."
          aria-label="Browse slots"
        />
    </div>
}

export default Header
