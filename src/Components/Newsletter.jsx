import React from 'react';

function Newsletter() {
  return (
    <div className='flex flex-col items-center justify-center bg-white h-[200px]'>
        <h1 className='text-center text-[24px] font-serif'>Get Trend Updates, Style Tips And More.</h1>
        <p className='font-serif text-[14px]'>
            Enter your Email below to be the first to know about new collections and product launches.
        </p>
        <form className='flex flex-row items-center mt-5 w-full max-w-[550px]'>
            <input 
                type='text' 
                placeholder='Enter Your Email Address' 
                className='bg-transparent border border-gray-400 rounded-3xl pl-10 pr-3 py-2 w-full text-left placeholder-black' 
            />
            <button 
                className='rounded-full px-6 py-1 bg-gray-300 text-sm mt-3 sm:mt-0 sm:ml-3 hover:bg-gray-400 transition duration-200'>
                Notify Me
            </button>
        </form>
    </div>
  );
}

export default Newsletter;