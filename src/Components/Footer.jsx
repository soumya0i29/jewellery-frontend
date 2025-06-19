import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillPinterest } from "react-icons/ai";

function Footer() {
  return (
    <div className="mt-0 bg-maroon flex flex-col md:flex-row 
    justify-between items-start p-4 md:p-8 lg:p-14 h-auto md:h-[300px] lg:h-[300px]">
      <div className='flex flex-col flex-grow'>
        <h1 className='mb-5 font-semibold font-serif text-[26px] text-white'>BERMERALE</h1>
        <ul className="circle-bullets">
          <li className=' text-gray-300'>15% STOREWIDE! Limited Time Only!</li>
          <li className='text-gray-300'>Fashion-Forward Jewellery Brand</li>
          <li className='text-gray-300'>Over 100 Styles To Choose From On BERMERALE</li>
          <li className='text-gray-300'>Shop Now For Free Delivery & Returns</li>
        </ul>
      </div>
      <div className='flex flex-col flex-grow'>
        <h1 className='mb-5 font-semibold font-serif text-[26px]  text-white'>About</h1>
        <ul className='text-gray-300'>
          <li className='mb-1'>Shop All</li>
          <li className='mb-1'>Contact</li>
          <li className='mb-1'>Reviews</li>
          <li className='mb-1'>FAQs</li>
          <li className='mb-1'>Our Story</li>
        </ul>
      </div>
      <div className='flex flex-col flex-grow'>
        <h1 className='mb-5 font-semibold font-serif text-[26px]  text-white'>Help</h1>
        <ul className='text-gray-300'>
          <li className='mb-1'>Privacy Policy</li>
          <li className='mb-1'>Terms & Conditions</li>
          <li className='mb-1'>Shipping Information</li>
          <li className='mb-1'>Exchange & Returns</li>
        </ul>
      </div>
      <div className='flex flex-col flex-grow'>
        <h1 className='mb-5 font-semibold font-serif text-[26px]  text-white'>Get 15% Off</h1>
        <p className='text-gray-300'>
          Sign-Up Get 15% Off Your First Order And Access<br />
          To Exclusive Deals. Sign-Up To Never Miss Any Deals!
        </p>
        <div className='mt-5 flex items-center'>
          <div className='flex flex-row relative items-center w-full'>
            <input
              type='email'
              placeholder='Enter Your Email Address'
              className='bg-transparent border border-gray-100 rounded-3xl pl-10 
              pr-4 py-2 w-[85%] text-left placeholder-gray-300'
            />
            <MdOutlineMailOutline className='absolute left-3 text-gray-300' />
            <button className='rounded-3xl px-6 py-3 ml-3 bg-white'>
              <FaArrowRight className='text-maroon'/>
            </button>
          </div>
        </div>
        <div className='flex flex-row mt-5 text-gray-300'>
          <FaInstagram className='mx-2' />
          <FaFacebook className='mx-2' />
          <FaTwitter className='mx-2' />
          <AiFillPinterest className='mx-2' />
          <FaYoutube className='mx-2' />
        </div>
      </div>
    </div>
  );
}

export default Footer;