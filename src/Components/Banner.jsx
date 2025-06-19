import React from 'react';
import banner from '../assets/images/banner.png';

function Banner() {
  return (
    <div className="bg-maroon text-white flex flex-col md:flex-row justify-between items-center mt-0 p-4 md:p-8 lg:p-14 lg:h-[400px]
    sm:h-[600px]"> 
      <div className="flex flex-col ml-0 md:ml-4 lg:ml-16 mb-4 md:mb-0">
        <h1 className="text-xl md:text-2xl">Welcome To The Bermerale</h1>
        <p className="text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] mb-4 font-semibold italic mt-4">
          50% OFF STOREWIDE.
        </p>
        <div className="mb-2">
          <span className="text-lg md:text-xl font-bold">Limited Time Offer!</span>
        </div>
        <button className="w-[100%] md:w-1/2 lg:w-1/4 bg-orange-300 text-maroon text-sm px-3 py-2 rounded-full shadow hover:bg-orange-500 transition">
          Shop Now
        </button>
      </div>
      <div className="flex-shrink-0">
        <img 
          src={banner} 
          alt="Banner" 
          className="w-full h-full object-cover" 
        />
      </div>
    </div>
  );
}

export default Banner;