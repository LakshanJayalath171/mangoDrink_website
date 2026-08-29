const Hero = () => {
  return (
    <div>
        <div className="bg-[url('../../public/Images/Hero.png')] bg-cover bg-center w-screen h-screen relative">
          <div className="absolute top-0 left-0 h-screen w-screen inset-0 bg-black/40 flex items-center justify-center text-center">
            <div>
              <h1 className="mango-heading-gradient text-7xl font-bold">Taste the Sunshine.</h1>
              <p className="text-blue-50 font-semibold text-2xl">Immerse yourself in the ultimate citrus experience.<br/> A cinematic journey from the tropical groves straight to your glass. Pure, unfiltered luxury.</p>
              <div className="flex items-center justify-center gap-3">
                <button className="mango-btn-gradient">Explore the Nectar</button>
                <button className="mango-btn-outline">View Ingredients</button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero