import { useState } from 'react';
import {products} from "../../constant"
import { ChevronLeft,ChevronRight } from 'lucide-react';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen,setIsOpen] = useState(false);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentProduct = products[currentIndex];

  return (
    <div className="w-screen aspect-video mango-bg-dark-section px-10 py-10 flex items-center justify-center text-center relative">
      <div>
        <div>
          <h1 className="mango-heading-white text-6xl">THE COLLECTION</h1>
        </div>

        <div >
          <div>
            <h1 className="mango-heading-gradient text-4xl py-3">
              {currentProduct.title}
            </h1>
          </div>

          <div className="apple w-[600px] h-full px-10 py-6 flex items-center justify-center gap-4">
            <div>
              <button onClick={handlePrevious} className="mango-btn-outline"><ChevronLeft /></button>
            </div>
            <div
              id="slider"
              className="flex flex-col items-center justify-center w-full h-full overflow-hidden"
            >
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-24 h-72 object-cover transition-all duration-500"
              />
              <button className='my-6 mango-btn-gradient' onClick={() => setIsOpen(true)}>
                Explore Product
              </button>
            </div>

            <button onClick={handleNext} className="mango-btn-outline"><ChevronRight /></button>
          </div>
        </div>
      </div>

      {isOpen && (<div className="absolute top-0 left-0 bg-black/80 w-screen h-full aspect-video flex items-center justify-center" onClick={()=>setIsOpen(false)}>

      <div className='apple px-10 py-6 flex items-center justify-center gap-3'>
        <div className='flex-1 '>
            <img src={currentProduct.image} alt={currentProduct.title} className=" object-cover w-24 h-72" />
        </div>
        <div className='flex-3'>
            <h1 className="mango-heading-gradient text-4xl">{currentProduct.title}</h1>
            <p className="mango-text-white">{currentProduct.description}</p>
        </div>
      </div>
      
      </div>)}
    </div>
  );
}

export default Products