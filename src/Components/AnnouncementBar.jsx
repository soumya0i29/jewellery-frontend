import React from 'react';

function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-yellow-300 text-black text-center py-3 flex justify-center items-center gap-4 shadow-md animate-fadeIn">
      <p className="font-semibold text-lg animate-pulse">🚚 Free shipping on orders over $50!</p>
      <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg">
        Shop Now
      </button>
    </div>
  );
}

export default AnnouncementBar;
