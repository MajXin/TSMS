import React from 'react';

const Navbar = ({ toggleTheme, isDarkMode }) => {
  return (
    <nav className="bg-white text-black dark:bg-black dark:text-white flex justify-between items-center mx-5 mt-2 px-6 py-4 border-4 rounded-full">
      <button className="text-black dark:text-white text-2xl px-5 py-1 rounded-md font-bold cursor-pointer">
        TSMS
      </button>
      <div className="space-x-6">
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Features
        </a>
        <a href="#" className="hover:underline">
          About Us
        </a>
        <a href="#" className="hover:underline">
          Contact Us
        </a>
        {/* Button to toggle theme */}
        <button
          onClick={toggleTheme}
          className="text-2xl px-6 py-2 "
        >
          {isDarkMode ? "🌙" : "🌞"}  {/* Show sun in light mode and moon in dark mode */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
