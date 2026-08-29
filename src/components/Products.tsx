import { useState } from 'react';
import {products} from "../../constant"
import { ChevronLeft,ChevronRight } from 'lucide-react';

const Products = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="w-screen aspect-video mango-bg-dark-section px-10 py-10 flex items-center justify-center text-center">
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
              <button className='my-6 mango-btn-gradient'>Explore Product</button>
            </div>

            <button onClick={handleNext} className="mango-btn-outline"><ChevronRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products