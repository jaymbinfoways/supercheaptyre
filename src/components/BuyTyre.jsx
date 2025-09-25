import React from 'react';
import { images } from '../assets/data';
import img from '../assets/Grouptyre.png'
import bg from '../assets/bg.png'



const BuyTyre = () => {
    return (
        <section className="relative bg-primary-dark text-white pt-[100px] sm:pt-0" style={{background: "linear-gradient(to bottom, #ED1C24,#141414)"}}>
        {/* <section className="relative bg-primary-dark text-white pt-[100px] sm:pt-0 inset-0 bg-gradient-to-b from-transparent via-transparent to-black/100" > */}
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 ">
                {/* Search Form */}
                <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 mx-10 shadow-lg absolute -translate-y-1/2 left-10 right-0 z-30 bg-no-repeat bg-cover bg-center lg:w-[79rem]" style={{ backgroundImage: `url(${bg})` }}>
                    <h3 className="text-black text-lg sm:text-xl lg:text-2xl font-bold text-center sm:text-left p-2">SEARCH FOR TYRES</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 sm:mt-2">
                        <select className="rounded-md border border-black px-3 sm:px-4 py-2 sm:py-3 text-black text-sm sm:text-base focus:ring-2 focus:ring-red-500 focus:border-red-500">
                            <option>Select a Width</option>
                        </select>
                        <select className="rounded-md border border-black px-3 sm:px-4 py-2 sm:py-3 text-black text-sm sm:text-base focus:ring-2 focus:ring-red-500 focus:border-red-500">
                            <option>Select a Profile</option>
                        </select>
                        <select className="rounded-md border border-black px-3 sm:px-4 py-2 sm:py-3 text-black text-sm sm:text-base focus:ring-2 focus:ring-red-500 focus:border-red-500">
                            <option>Select a Diameter</option>
                        </select>
                        <select className="rounded-md border border-black px-3 sm:px-4 py-2 sm:py-3 text-black text-sm sm:text-base focus:ring-2 focus:ring-red-500 focus:border-red-500">
                            <option>Select a Brand</option>
                        </select>
                        <button className="bg-red-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 lg:px-8 rounded-md hover:bg-red-700 active:scale-95 transition-all duration-200 text-base sm:text-lg col-span-1 sm:col-span-2 lg:col-span-1">
                            Select
                        </button>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 py-10 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center ">
                    <div className="order-2 lg:order-1">
                        <h2 className="font-roboto font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">Buy your tyre</h2>
                        <p className="font-roboto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales dictum aliquam sed ornare tellus sit et ullamcorper velit. Diam cursus eu metus diam donec. Tellus rhoncus feugiat auctor viverra pretium. Id accumsan, augue est purus, vitae est. Risus fames arcu et massa sed parturient risus aenean.
                        </p>
                    </div>
                    <div className="relative order-1 lg:order-2 h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[400px] ml-0 lg:ml-0">
                        <div className="absolute inset-0 flex items-center justify-center lg:justify-end">
                            <div className="relative flex items-center -space-x-8 sm:-space-x-12 md:-space-x-16 lg:-space-x-20 xl:-space-x-24">
                                <div className="relative">
                                    <div className="absolute inset-0 blur-xl opacity-30 rounded-full transform -rotate-12"></div>
                                    <img
                                        src={img}
                                        alt="Tyre"
                                        className="relative z-0 sm:z-10 lg:z-30 w-full h-auto object-contain drop-shadow-2xl max-w-[8rem] sm:max-w-[10rem] md:max-w-[12rem] lg:max-w-[14rem] xl:max-w-[28rem] 2xl:max-w-[28rem]"
                                    />
                                </div>
                                {/* <div className="relative">
                                    <div className="absolute inset-0 blur-xl opacity-30 rounded-full transform -rotate-12"></div>
                                    <img
                                        src={images.b}
                                        alt="Tyre"
                                        className="w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72 relative z-20 transform -rotate-12 drop-shadow-2xl"
                                    />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BuyTyre;
