import React from 'react';

const CtaSection = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="relative bg-black rounded-3xl text-white min-h-[380px] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-4 md:p-12">
          <div className="relative z-10 order-2 md:order-1 h-72 -top-48 md:-top-48 md:-left-60">
            <img 
              src="/appointment/appointmentgirl.svg" 
              alt="Professional holding a clipboard"
              className="w-full h-[529px] mx-auto"
            />
          </div>
          <div className="relative z-10 order-1 md:order-2 text-center md:text-left -top-20 md:-top-20 right-52">
            <h2 className="font-semibold text-3xl md:text-[40px] leading-tight tracking-wider">
              Right tyres, right time,<br />Just one click away.
            </h2>
          </div>
        </div>
        <img 
          src="/appointment/appointmenttyre.svg" 
          alt="Stack of tyres"
          className="absolute -bottom-5 -right-5 h-[347px] w-auto md:h-[347px] md:w-auto"
        />
      </div>
    </section>
  );
};

export default CtaSection;