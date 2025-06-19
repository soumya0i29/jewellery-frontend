import React from 'react';
import brec from '../assets/images/bracelets_main.png';
import earings from '../assets/images/earing_main.png';
import pendant from '../assets/images/pendants_main.png';
import rings from '../assets/images/rings_main.png';

function Collection() {
  return (
    <div className='mt-20'>
        <h1 className='font-medium text-[24px] text-center flex-grow
        mb-[-25px]'>Shop By Collections</h1>
        <button className=' text-maroon text-sm px-4 py-2 rounded-full shadow hover:bg-orange-300 transition ml-[78%]'>
          View All
        </button>
      <div className='mt-3 flex flex-row flex-wrap mx-2 md:mx-4 lg:mx-8 items-center justify-center'>
        <div className='flex flex-col cursor-pointer'>
          <img src={brec} className='h-[200px] w-[200px] border bg-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105' alt="Bracelets" />
          <p className='text-center mt-2 text-maroon'>Bracelets</p>
        </div>
        <div className='flex flex-col cursor-pointer'>
          <img src={earings} className='ml-4 h-[200px] w-[200px] border bg-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105' alt="Earrings" />
          <p className='text-center mt-2 text-maroon'>Earrings</p>
        </div>
        <div className='flex flex-col cursor-pointer'>
          <img src={pendant} className='ml-4 h-[200px] w-[200px] border bg-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105' alt="Pendants" />
          <p className='text-center mt-2 text-maroon'>Pendants</p>
        </div>
        <div className='flex flex-col cursor-pointer'>
          <img src={rings} className='ml-4 h-[200px] w-[200px] border bg-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105' alt="Rings" />
          <p className='text-center mt-2 text-maroon'>Rings</p>
        </div>
      </div>
    </div>
  );
}

export default Collection;