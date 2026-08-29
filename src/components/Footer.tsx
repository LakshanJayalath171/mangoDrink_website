const Footer = () => {
  return (
    <div>
        <div className="mango-bg-dark-section flex items-baseline justify-center gap-3 px-10 py-6">
            <h1 className="mango-heading-gradient text-8xl font-extrabold">MANGO NECTAR</h1>
        </div>
      <div className="mango-gradient-dark w-screen h-full px-10 py-3 flex items-center justify-between ">
        <div>
            
          <p className="mango-text-white">
            © 2024 MANGO NECTAR. IMMERSE IN THE CITRUS.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3">
          <p className="mango-text-white">The Story</p>
          <p className="mango-text-white">Farm To Bottle</p>
          <p className="mango-text-white">Nutrition</p>
          <p className="mango-text-white">Store Locator</p>
          <p className="mango-text-white">Privacy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer