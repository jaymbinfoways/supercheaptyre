import React from 'react';

const BreadcrumbSection = () => {
  return (
    <div className="bg-[#F3F3F3] shadow-lg">
      <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#ED1C24] font-lexend font-medium text-brand-red">
            Tyres Listing
          </h1>
          <p className="text-sm sm:text-base lg:text-lg font-lexend text-[#747474]">
            Find the perfect tyres for your vehicle from top brands
          </p>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
