import React from 'react';
import { images } from '../assets/data';
import { Facebook, Twitter, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-12 sm:pt-16 md:pt-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-10 md:mb-12">
                    {/* Logo and Social */}
                    <div className="space-y-4 sm:space-y-6 text-center sm:text-left">
                        <img src={images.logo} alt="Supercheap Tyres Logo" className="w-48 sm:w-56 md:w-60 h-auto mx-auto sm:mx-0" />
                        <p className="font-plus-jakarta text-gray-300 text-sm sm:text-base max-w-xs mx-auto sm:mx-0">
                            Our vision is to provide convenience and help increase your sales business.
                        </p>
                        <div className="flex space-x-3 sm:space-x-4 justify-center sm:justify-start">
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"><Facebook size={18} className="sm:w-5 sm:h-5" /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"><Twitter size={18} className="sm:w-5 sm:h-5" /></a>
                            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-primary transition-colors"><Instagram size={18} className="sm:w-5 sm:h-5" /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                        <h4 className="text-lg sm:text-xl font-semibold font-plus-jakarta mb-3 sm:mb-4">Quick Links</h4>
                        <ul className="space-y-2 sm:space-y-3 font-plus-jakarta text-gray-300 text-sm sm:text-base">
                            <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Book Appointment</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Services</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">My Invoice</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="space-y-3 sm:space-y-4 text-center sm:text-left">
                        <h4 className="text-lg sm:text-xl font-semibold font-plus-jakarta mb-3 sm:mb-4">Contact Us</h4>
                        <ul className="space-y-2 sm:space-y-3 font-plus-jakarta text-gray-300 text-sm sm:text-base">
                            <li className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start">
                                <Phone size={16} className="sm:w-5 sm:h-5" />
                                <span>1234567453</span>
                            </li>
                            <li className="flex items-center space-x-2 sm:space-x-3 justify-center sm:justify-start">
                                <Mail size={16} className="sm:w-5 sm:h-5" />
                                <span className="break-all">supercheaptyre@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* We Accept */}
                    <div className="border border-gray-700 rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center sm:text-left">
                        <h4 className="text-lg sm:text-xl font-semibold font-lexend mb-3 sm:mb-4">WE ACCEPT</h4>
                        <div className="grid grid-cols-3 gap-2 sm:gap-3">
                            {Object.values(images.payment).map((src, i) => (
                                <div key={i} className="bg-white rounded-md p-1.5 sm:p-2 flex items-center justify-center h-8 sm:h-10">
                                    <img src={src} alt="Payment method" className="max-h-full max-w-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left space-y-3 sm:space-y-0">
                    <p className="font-plus-jakarta text-gray-400 text-sm sm:text-base">©2025 Copyright SupercheapTyre Dandenong</p>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 font-plus-jakarta text-gray-400 text-sm sm:text-base">
                        <a href="#" className="hover:text-white transition-colors">Privacy & Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms & Condition</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
