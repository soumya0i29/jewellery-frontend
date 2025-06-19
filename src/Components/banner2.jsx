import React from 'react'
import secbanner from '../assets/images/secbanner.png'

function banner2() {
  return (
    <div className="mt-5 bg-maroon text-white flex flex-col md:flex-row justify-between 
    items-center p-4 md:p-5 lg:p-10 lg:h-[300px] sm:h-[500px]">
        <div className="flex-shrink-0 ml-[-30px]">
        <img 
          src={secbanner} 
          alt="Banner" 
          className="w-full h-[298px] object-cover" 
        />
      </div>
      <div className="flex flex-col mr-16">
        <h1 className="text-[25px] md:text-[35px] lg:text-[40px]
        font-semibold italic">30% OFF</h1>
        <p className="text-[25px] md:text-[35px] lg:text-[40px] mb-4 font-semibold italic">
          ON PEARL PRODUCTS.
        </p>
        <div className="mb-2">
          <span className="text-lg md:text-lg">Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</span>
        </div>
        <button className="w-[100%] md:w-1/2 lg:w-1/4 bg-orange-300 text-maroon text-sm px-3 py-2 rounded-full shadow hover:bg-orange-500 transition">
          Shop The Collection
        </button>
      </div>
    </div>
  )
}

export default banner2