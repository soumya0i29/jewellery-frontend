import React from 'react';
import { FaShippingFast } from "react-icons/fa";
import { IoAirplaneOutline } from "react-icons/io5";
import { TbTruckReturn } from "react-icons/tb";
import { MdOutlinePayments } from "react-icons/md";

function Card() {
  return (
    <div className='flex flex-row flex-wrap mx-2 md:mx-4 lg:mx-8 items-center justify-center'>
      {/* Card 1 */}
      <div className='bg-white shadow-lg border rounded-2xl p-4 m-2 w-72 text-center flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <div className="flex justify-center items-center mb-2">
          <FaShippingFast className='text-[28px] text-gray-400' />
        </div>
        <h1 className='font-semibold text-[18px] font-serif italic'>FREE SHIPPING</h1>
        <p>Fast & Free Shipping Worldwide<br /> Limited Time Only</p>
      </div>

      {/* Card 2 */}
      <div className='bg-white shadow-lg border rounded-2xl p-4 m-2 w-72 text-center flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <div className="flex justify-center items-center mb-2">
          <IoAirplaneOutline className='text-[28px] text-gray-400' />
        </div>
        <h1 className='font-semibold text-[18px] font-serif italic'>FAST DELIVERY</h1>
        <p>To Over 130 Countries <br /> Worldwide Within 20 Days</p>
      </div>

      {/* Card 3 */}
      <div className='bg-white shadow-lg border rounded-2xl p-4 m-2 w-72 text-center flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <div className="flex justify-center items-center mb-2">
          <TbTruckReturn className='text-[28px] text-gray-400' />
        </div>
        <h1 className='font-semibold text-[18px] font-serif italic'>EASY RETURNS</h1>
        <p>Convenient Easy Returns<br /> Service Within 14 Days</p>
      </div>

      {/* Card 4 */}
      <div className='bg-white shadow-lg border rounded-2xl p-4 m-2 w-72 text-center flex flex-col justify-between transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
        <div className="flex justify-center items-center mb-2">
          <MdOutlinePayments className='text-[28px] text-gray-400' />
        </div>
        <h1 className='font-semibold text-[18px] font-serif italic'>SECURE PAYMENT</h1>
        <p>SSL Encryption For Secure<br /> Transactions & Personal Data</p>
      </div>
    </div>
  );
}

export default Card;
