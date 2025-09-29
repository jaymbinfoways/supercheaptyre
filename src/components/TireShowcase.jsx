import React from "react";

const TireCard = ({ image, name, price }) => (
  <div className="bg-dark rounded-xl sm:rounded-2xl p-3 text-white w-full">
    <div className="bg-white rounded-xl sm:rounded-2xl mb-2 sm:mb-3">
      <img
        src={image}
        alt={name}
        className="w-full h-56 sm:h-64 md:h-72 object-contain rounded-xl"
      />
    </div>
    <p className="font-medium text-sm sm:text-lg md:text-xl">{name}</p>
    <p className="font-medium text-xs sm:text-sm md:text-base my-2">{price}</p>
    <p className="text-xs text-[#E0E0E0] mt-1">View Details</p>
  </div>
);

const TireShowcase = () => {
  return (
    <section className="bg-dark py-10 sm:py-14 md:py-10 sm:h-[37rem]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Best Selling Section */}
          <div className="bg-white rounded-lg p-4 sm:p-6 lg:col-span-2 w-full h-full flex flex-col">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 text-center">
              Best Selling
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 flex-1">
              <TireCard
                image="../../public/tirecard.svg"
                name="CrossClimate"
                price="$ 999"
              />
              <TireCard
                image="../../public/tirecard.svg"
                name="CrossClimate"
                price="$ 999"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full h-full flex flex-col space-y-6 sm:space-y-8">
            
            {/* New Arrivals */}
            <div className="bg-white rounded-lg p-4 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                New Arrivals
              </h3>
              <div className="bg-dark rounded-xl p-3 sm:p-2 flex items-center gap-3 sm:gap-4 flex-1">
                <div className="bg-white rounded-lg sm:rounded-xl p-2 h-24 sm:h-32">
                  <img
                    src="../../public/tirecard2.svg"
                    alt="CrossClimate"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-white mb-8">
                  <p className="font-medium text-sm sm:text-lg md:text-xl">CrossClimate</p>
                  <p className="font-medium text-xs sm:text-sm md:text-base">$ 999</p>
                  <p className="text-xs text-[#E0E0E0] mt-1">View Details</p>
                </div>
              </div>
            </div>

            {/* Popular */}
            <div className="bg-white rounded-lg p-4 sm:p-6 flex-1 flex flex-col">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4">
                Popular
              </h3>
              <div className="bg-dark rounded-xl p-3 sm:p-2 flex items-center gap-3 sm:gap-4 flex-1">
                <div className="bg-white rounded-lg sm:rounded-xl p-2  h-24 sm:h-32">
                  <img
                    src="../../public/tirecard2.svg"
                    alt="CrossClimate"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-white mb-8">
                  <p className="font-medium text-sm sm:text-lg md:text-xl">CrossClimate</p>
                  <p className="font-medium text-xs sm:text-sm md:text-base">$ 999</p>
                  <p className="text-xs text-[#E0E0E0] mt-1">View Details</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>  
    </section>
  );
};

export default TireShowcase;
