import React, { useState } from 'react';
import { images, navLinks } from '../assets/data';
import { Phone, User, Search, Menu, X, Moon } from 'lucide-react';
import { HiMoon } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Main Row */}
      <div className="bg-[#000000] text-white">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 flex items-start justify-between h-16 sm:h-20 md:h-[160px] py-0">
          {/* Logo */}
          <a href="#" className="w-40 sm:w-52 md:w-64 lg:w-80 shrink-0">
            <img src={images.logo} alt="Supercheap Tyres Logo" className="block h-16 sm:h-28 md:h-32 lg:h-40 object-contain" />
          </a>

          <div className=''>
            <div className="bg-[#000000] text-white text-xs sm:text-sm">
              <div className="container mx-auto flex justify-end items-center h-10 sm:h-12">
                <div className="flex items-center gap-3">

                  <div className="flex items-center space-x-3">
                    <FaPhoneAlt size={14} className="sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">(03) 9793 6190</span>
                  </div>
                  <HiMoon size={20} className="ml-2" />
                </div>
              </div>
            </div>
            {/* Right: Compact search + icons */}
            <div className="hidden lg:flex items-center justify-end space-x-2 xl:space-x-4">
              <div className="relative w-[16rem] xl:w-[28rem] 2xl:w-[36rem]">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full h-10 xl:h-11 rounded-full bg-white text-dark placeholder-gray-500 pl-4 pr-11 focus:outline-none"
                />
                <div className="absolute right-1 top-1 bottom-1 aspect-square rounded-full bg-dark text-white grid place-items-center">
                  <Search size={18} />
                </div>
              </div>
              <button className="p-2 xl:p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors shadow-sm"><MdLocationPin size={20} className="xl:w-5 xl:h-5" /></button>
              <button className="p-2 xl:p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors shadow-sm"><FaShoppingCart size={20} className="xl:w-5 xl:h-5" /></button>
            </div>
            {/* Center Search */}
            <div className="hidden lg:block bg-[#000000] text-white mt-6 h-[10px]">
              <div className="container">
                <nav className="flex gap-3 items-center justify-center">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className={` text-base pb-3 xl:text-lg font-medium hover:text-primary px-5 transition-colors ${link.name === 'Home' ? 'text-primary border-b-2 border-primary' : ''}`}
                    >
                      <span className="inline-block">{link.name}</span>
                      {/* {link.name === 'Home' && (
                        <div className="h-1 w-full bg-primary mt-2 rounded-sm"></div>
                      )} */}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-1">
              {isMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
            </button>
          </div>



        </div>
      </div>

      {/* Mobile Menu */
      }
      {isMenuOpen && (
        <div className="lg:hidden bg-dark text-white absolute top-full left-0 w-full z-50 shadow-lg">
          <nav className="flex flex-col items-center space-y-3 sm:space-y-4 py-6 sm:py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base sm:text-lg font-medium hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-gray-800"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-3 sm:space-x-4 pt-4 border-t border-gray-700 w-full justify-center">
              <button className="p-2 sm:p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"><Search size={18} className="sm:w-5 sm:h-5" /></button>
              <button className="p-2 sm:p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"><MdLocationPin size={18} className="sm:w-5 sm:h-5" /></button>
              <button className="p-2 sm:p-3 rounded-full bg-white text-black hover:bg-gray-100 transition-colors"><FaShoppingCart size={18} className="sm:w-5 sm:h-5" /></button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
