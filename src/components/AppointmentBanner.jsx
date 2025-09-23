import React from 'react';
import { images } from '../assets/data';

const AppointmentBanner = () => {
    return (
       
        <section className="relative bg-gray-900 py-10 sm:py-12 md:py-16 bg-white/50">
            <img 
                src={images.appointmentBg} 
                alt="Tires stacked" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tyre image anchored to container */}
                <div className="pointer-events-none absolute left-0 bottom-0 top-auto sm:-left-14 sm:-top-44 sm:bottom-auto z-0">
                    <img 
                        src={images.buyTyreTires} 
                        alt="Two tires" 
                        className="w-40 xs:w-48 sm:w-60 md:w-72 lg:w-96 xl:w-[460px] h-auto object-contain drop-shadow-xl"
                    />
                </div>
                <div className="relative z-10">
                
                <div className="flex items-center justify-center">
                    <button 
                        className="bg-primary text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl py-3 sm:py-4 px-6 sm:px-8 md:px-10 rounded-full shadow-lg border-2 border-primary-dark hover:bg-red-700 transition-all duration-200 transform hover:scale-105 active:scale-95  sm:w-auto max-w-sm"
                    >
                        Appointment Booking
                    </button>
                </div>
                </div>
            </div>
        </section>
       
    );
};

export default AppointmentBanner;
