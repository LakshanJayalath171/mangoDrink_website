const Navbar = () => {
  return (
    <div className="w-screen h- full py-2  px-10 flex items-center justify-between mango-glass-dark ">
        <div>
            <img src="/images/logo.png" alt="Mango Logo" className="size-10"/>
        </div>

        <div>
            <h1 className="text-white/80 text-4xl font-bold">Mango</h1>
        </div>

        <div>
            <button className="mango-btn-gradient">Shop now</button>
        </div>
    </div>
  )
}

export default Navbar