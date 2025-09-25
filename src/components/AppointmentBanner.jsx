import React from 'react';
import { images } from '../assets/data';
import img from '../assets/appointment.png';

const AppointmentBanner = () => {
    return (
        <section className="relative h-72 bg-gray-900 py-10 sm:py-12 md:py-16 bg-white/50">
            <img 
                src={images.appointmentBg} 
                alt="Tires stacked" 
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Tyre image anchored to container */}
                <div className="pointer-events-none absolute bottom-0 -top-36 -right-0 sm:-right-10 sm:-top-36 sm:bottom-auto z-0">
                    <img 
                        src={img} 
                        alt="Two tires" 
                        className="w-40 xs:w-48 sm:w-60 md:w-72 lg:w-96 xl:w-[460px] h-[454px] object-contain drop-shadow-xl"
                    />
                </div>
                <div className="relative z-10">
                    <div className="flex items-center justify-center py-10">
                        <div className='border-2 border-red-600 rounded-full'>
                            <button 
                                className="sm:w-[553px] mx-auto bg-primary p-2 border-2 border-white text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl py-3 sm:py-4 px-6 sm:px-8 md:px-16 rounded-full shadow-lg hover:bg-red-700 transition-all duration-200 transform hover:scale-105 active:scale-95"
                            >
                                Appointment Booking
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentBanner;