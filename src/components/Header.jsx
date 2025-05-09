import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (
    <div className="fixed w-full flex items-center justify-end z-30 p-20">
      <button className="relative group bg-black border-4 text-xl px-6 py-3 rounded-full overflow-hidden animate-pulse-glow">
        <span className="absolute inset-0 bg-gray-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        <span className="relative text-white group-hover:text-black transition-colors duration-300">
          Hire Me
        </span>
        {/* Glowing Effect */}
        <span className="absolute inset-0 rounded-full border-[6px] border-white opacity-50 group-hover:animate-pulse"></span>
      </button>
      <i className="text-gray-400 ri-more-2-fill text-4xl ml-3"></i>
    </div>
  );
};

export default Header;