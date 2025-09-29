import React from "react";
import { ContactSection } from "./ContactSection";
import { EnquirySection } from "./EnquirySection";


export const ContactUs = () => {
  return (
    <div
      className="relative w-full container mx-auto  min-h-screen bg-neutral-100 overflow-hidden"
      data-model-id="1297:9685"
    >
      <img
        className="absolute top-[31rem] left-[calc(50.00%_-_391px)]  animate-fade-in [--animation-delay:400ms]"
        alt="Img"
        src="/contactus/contacttyre.svg"
      />

      <img
        className="absolute bottom-0 -right-0 w-[466px] h-[565px]  animate-fade-in [--animation-delay:600ms]"
        alt="Ellipse"
        src="/contactus/avtar.svg"
      />

      <div className="relative w-full">        

        <div className="translate-y-[-1rem] animate-fade-up  [--animation-delay:200ms]">
          <ContactSection />
        </div>

        <div className="mb-4 px-24">
          <h2 className="text-primary font-medium text-3xl mb-4">GET IN TOUCH</h2>
          <p className="text-[#7A7A7A] max-w-2xl mb-8 leading-relaxed">
            Contact us for everything from quality cheap tyres to top of the range all-terrain tyres. 
            Our Dandenong Tyre store has everything you will need!
          </p>
        </div>

        <div className="translate-y-[-1rem] animate-fade-up  [--animation-delay:500ms]">
          <EnquirySection />
        </div>
      </div>
    </div>
  );
};
