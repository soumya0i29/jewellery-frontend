import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

function Header() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    console.log(`Item clicked: ${index}`);
    setActiveIndex(index);
  };

  return (
    <div className="mx-6 md:mx-12 lg:mx-32 mb-0">
      <div className="flex items-center justify-between">
        <img 
          src={logo} 
          className="w-[100px] h-[100px] mr-1 md:w-[120px] md:h-[120px] md:mr-3 lg:w-[120px] lg:h-[120px] lg:mr-3"
          alt="Logo" 
        />
        <div className="flex-grow flex flex-col items-center sm:flex sm:flex-col">
          <ul className='flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 cursor-pointer'>
            {['New In', 'Best Sellers', 'Trending', 'Bracelets', 'Earrings', 'Rings'].map((item, index) => (
              <li 
                key={index} 
                onClick={() => handleItemClick(index)} 
                className={`text-sm md:text-base ${activeIndex === index ? 'font-bold' : ''}`} // Responsive text size
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center space-x-4 text-[18px] md:text-[20px] ml-1 md:ml-3 cursor-pointer">
          <IoSearchOutline />
          <MdOutlineFavoriteBorder />
          <IoCartOutline />
          <Link to="/admin">
            <button className="text-[16px] text-maroon px-4 py-1 rounded-full bg-orange-300 hover:bg-orange-500">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;