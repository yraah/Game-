import React, { useState } from 'react';
import { CarouselPropsInterface } from '../global_components/GlobalInterface.tsx';
import { carouselOnLoadFunction } from '../global_components/GlobalFunction.tsx';

const Carousel:React.FC<CarouselPropsInterface> = ({
  images,
  autoSlide = true,
  autoSlideInterval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  carouselOnLoadFunction(handleNext, autoSlideInterval, autoSlide);
  
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className="w-full h-[200px] object-cover sm:h-[400px] md:h-[500px]"
          />
        ))}
      </div>
    </div>
  );


};

export default Carousel;
