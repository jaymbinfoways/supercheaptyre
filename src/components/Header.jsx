import React, { useState } from 'react';
import { images, navLinks } from '../assets/data';
import { Phone, ShoppingCart, User, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Top Bar */}
      <div className="bg-dark text-white text-xs sm:text-sm">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 flex justify-between items-center h-10 sm:h-12">
          <div className="hidden sm:block"></div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <Phone size={14} className="sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">(03) 9793 6190</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-dark text-white">
        <div className="container mx-auto px-3 sm:px-4 lg:px-8 flex justify-between items-center h-16 sm:h-20 md:h-24">
          <a href="#" className="w-32 sm:w-40 md:w-48 lg:w-64">
            <img src={images.logo} alt="Supercheap Tyres Logo" className="h-12 sm:h-14 md:h-16 lg:h-20 object-contain" />
          </a>

          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base xl:text-lg font-medium hover:text-primary transition-colors ${link.name === 'Home' ? 'text-primary' : ''}`}
              >
                {link.name}
                {link.name === 'Home' && <div className="h-1 w-full bg-primary mt-1"></div>}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <button className="p-1.5 xl:p-2 rounded-full bg-white text-dark hover:bg-gray-100 transition-colors"><Search size={18} className="xl:w-5 xl:h-5" /></button>
            <button className="p-1.5 xl:p-2 rounded-full bg-white text-dark hover:bg-gray-100 transition-colors"><User size={18} className="xl:w-5 xl:h-5" /></button>
            <button className="p-1.5 xl:p-2 rounded-full bg-white text-dark hover:bg-gray-100 transition-colors"><ShoppingCart size={18} className="xl:w-5 xl:h-5" /></button>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-1">
              {isMenuOpen ? <X size={24} className="sm:w-7 sm:h-7" /> : <Menu size={24} className="sm:w-7 sm:h-7" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
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
              <button className="p-2 sm:p-3 rounded-full bg-white text-dark hover:bg-gray-100 transition-colors"><Search size={18} className="sm:w-5 sm:h-5" /></button>
              <button className="p-2 sm:p-3 rounded-full bg-white text-dark hover:bg-gray-100 transition-colors"><User size={18} className="sm:w-5 sm:h-5" /></button>
              <button className="p-2 sm:p-3 rounded-full bg-white text-dark hover:bg-gray-100 transition-colors"><ShoppingCart size={18} className="sm:w-5 sm:h-5" /></button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
