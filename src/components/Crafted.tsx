const Crafted = () => {
  return (
    <div className='bg-amber-100 w-screen aspect-video flex items-center justify-center gap-6'>
        <div className="flex-3 px-10 py-6">
            <h1 className='text-4xl font-bold text-center text-amber-900 my-4'>Crafted by nature,<br/> perfected by passion.</h1>

            <p className="text-amber-900 font-light">We select only the finest, sun-ripened Alphonso mangoes, ensuring every drop is a testament to purity and vibrant tropical flavor. No additives, just pure liquid gold.</p>

            <div className="flex items-center justify-center gap-10 py-5">
                <div>
                    <h1 className="mango-eyebrow text-3xl">100%</h1>
                    <p>Real Mango</p>
                </div>
                <div>
                    <h1 className="mango-eyebrow text-3xl">25+</h1>
                    <p>Years of Experience</p>
                </div>
                <div>
                    <h1 className="mango-eyebrow text-3xl">#1</h1>
                    <p>Taste Rating</p>
                </div>
            </div>
        </div>
        <div className="flex-2">
            <img src='/images/crafted.jpg' alt='product01' className='w-64 h-96 object-cover'/>
        </div>
    </div>
  )
}

export default Crafted