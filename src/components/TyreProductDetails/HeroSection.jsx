import React from 'react';
import ProductInfo from './ProductInfo';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#f5f5f5] py-[12px] sm:py-[16px] md:py-[20px] lg:py-[24px]">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-[25px] sm:mx-[35px] md:mx-[40px] lg:mx-[50px]">
          <div className="flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px] lg:gap-[28px] w-full">
            {/* Shop Tyres Header */}
            <div className="flex justify-start items-center w-full">
              <h1 className="text-[20px] sm:text-[24px] md:text-[27px] lg:text-[30px] font-medium leading-[25px] sm:leading-[30px] md:leading-[34px] lg:leading-[38px] font-['Lexend'] text-[#ed1c24]">
                Shop Tyres
              </h1>
            </div>

            {/* Main Product Section */}
            <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-6 lg:gap-8">
              {/* Left Side - Product Images */}
              <div className="flex flex-col gap-[12px] sm:gap-[16px] md:gap-[20px] lg:gap-[22px] w-full lg:w-[40%] items-center">
                {/* Main Product Image */}
                <div className="flex justify-center items-center w-full border border-[#6e6d6d] rounded-[20px] bg-white p-[48px] sm:p-[60px] md:p-[80px] lg:p-[96px_36px]">
                  <img 
                    src="/home/tirecard2.svg" 
                    alt="Apollo Amazer 4G Life Tyre - Main Product View" 
                    className="w-full max-w-[480px] h-auto object-contain"
                  />
                </div>

                {/* Thumbnail Images */}
                <div className="flex gap-[16px] sm:gap-[24px] md:gap-[28px] lg:gap-[32px] w-full justify-center">
                  <div className="flex justify-center items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-[150px] border border-[#6e6d6d] rounded-[20px] bg-white p-[4px]">
                    <img 
                      src="/productdetails/productdetails1.svg" 
                      alt="Apollo Amazer 4G Life - Side View" 
                      className="w-[76%] h-auto object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-auto border border-[#6e6d6d] rounded-[20px] bg-white p-[14px]">
                    <img 
                      src="/productdetails/productdetails2.svg" 
                      alt="Apollo Amazer 4G Life - Front View" 
                      className="w-[108px] h-[108px] object-contain"
                    />
                  </div>
                  <div className="flex justify-center items-center w-[100px] sm:w-[120px] md:w-[140px] lg:w-auto border border-[#6e6d6d] rounded-[20px] bg-white p-[14px]">
                    <img 
                      src="/productdetails/productdetails3.svg" 
                      alt="Apollo Amazer 4G Life - Detail View" 
                      className="w-[108px] h-[108px] object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Right Side - Product Information */}
              <div className="flex flex-col gap-[8px] sm:gap-[10px] md:gap-[12px] lg:gap-[12px] w-full lg:w-[52%]">
                {/* Product Title and Basic Info */}
                <div className="flex flex-col w-full">
                  <div className="flex justify-start items-center w-full py-[6px]">
                    <h2 className="text-[20px] sm:text-[23px] md:text-[25px] lg:text-[27px] font-medium leading-[25px] sm:leading-[29px] md:leading-[32px] lg:leading-[34px] font-['Lexend'] text-black">
                      Apollo Amazer 4G Life
                    </h2>
                  </div>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] font-['Lexend'] text-[#676767] mt-[4px]">
                    High-performance tyres
                  </p>
                  <p className="text-[20px] sm:text-[22px] md:text-[24px] font-medium leading-[25px] sm:leading-[27px] md:leading-[30px] font-['Lexend'] text-[#ff0000] mt-[8px]">
                    $ 7.2
                  </p>
                </div>

                {/* Product Description */}
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[18px] sm:leading-[19px] md:leading-[20px] font-['Lexend'] text-[#6e6d6d] w-full mt-[6px]">
                  The new attractive asymmetric tread design offers superior handling and braking performances on both dry and wet surfaces.
                </p>

                {/* Move ProductInfo directly under description to remove large gap */}
                <div className="mt-[8px] w-full">
                  <ProductInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;