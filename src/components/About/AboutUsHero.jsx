import React from 'react';

const AboutUsHero= () => {
  return (
         <section className="relative w-full h-[260px] sm:h-[360px] md:h-[480px] lg:h-[530px] overflow-hidden">
      <img
        className="absolute w-full h-full object-cover"
        alt="Tyre shop homepage"
        src="/about/aboutbg.svg"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-[700px] px-4">
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-bold text-[#000000] text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-normal text-center">
              About Us
            </h1>

            <p className="w-full md:w-[699px] max-w-full font-medium text-[#000000] text-center text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
