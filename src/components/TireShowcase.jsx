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
                image="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/7728/cadd/49fa9e587ced50270968c4fe44ee5963?Expires=1759104000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hV3LUhqeu-7GpeOsUz~eo0GQTRWWOIqVWNHuLfktaELs5D5vBylKgKeSElSY~fvyTvEE9gZUdpzcK36IqwukCmTUceO6n3j-6X3sa~uwgz~1TueUdI20Vgyg-xBBj-tLxEDL2Gz229D6XQY6-Rg211GGtfxd05LsFmkZaHywlqUQkIkO36Z78RdVk9Qm0c-CzupgO~84iCYOw9tqyVN4-GvcWvJ2yBvQJj3qg3GiQ7sCOwxv6GxN5wDI7Ho4hQVM~vFArhzXIIeAetpY5PG3hULVzUpxtjL2eS3niiW~tf10ELHENvpGVvdaAMXx07hkKjvoI4nIsvbbjU-~UIwBvw__"
                name="CrossClimate"
                price="$ 999"
              />
              <TireCard
                image="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/7728/cadd/49fa9e587ced50270968c4fe44ee5963?Expires=1759104000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hV3LUhqeu-7GpeOsUz~eo0GQTRWWOIqVWNHuLfktaELs5D5vBylKgKeSElSY~fvyTvEE9gZUdpzcK36IqwukCmTUceO6n3j-6X3sa~uwgz~1TueUdI20Vgyg-xBBj-tLxEDL2Gz229D6XQY6-Rg211GGtfxd05LsFmkZaHywlqUQkIkO36Z78RdVk9Qm0c-CzupgO~84iCYOw9tqyVN4-GvcWvJ2yBvQJj3qg3GiQ7sCOwxv6GxN5wDI7Ho4hQVM~vFArhzXIIeAetpY5PG3hULVzUpxtjL2eS3niiW~tf10ELHENvpGVvdaAMXx07hkKjvoI4nIsvbbjU-~UIwBvw__"
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
                    src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/cdf4/11b7/b248ddd2cbc28bac45c8cecc1cb9397a?Expires=1759104000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I5aZxXffu661M4sB3R6bsWF-maJiEJrtixGWqU65ux98jbc5aWuWr3R1wkDSCpKnbFVvfNiSfERJ5Sm8ezO84Wajrr9GzpbLwnmqUU5943vD3X~ZpOR87xdTd0aQiK55OzrYlR5woTxWdd7vgH9Awz3tK7r5U8F9F3lwyoUkRZhwZmvg4AjSlB72z~Zm~~2Qzv6wZUCubqfLjn4Jcfj8fIZYED0AnAncWsmTowHgeT2FxUw6gQUfCv1JzLj4ifs4ZcyoPNrTnruoA5MZig0pPRZw0xpdqA9heZFrZu7gJ2tSVlxm07-w3IJZqjr4z8xq6FFiQE6ye0W5m9jQZ03jSw__"
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
                    src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/cdf4/11b7/b248ddd2cbc28bac45c8cecc1cb9397a?Expires=1759104000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I5aZxXffu661M4sB3R6bsWF-maJiEJrtixGWqU65ux98jbc5aWuWr3R1wkDSCpKnbFVvfNiSfERJ5Sm8ezO84Wajrr9GzpbLwnmqUU5943vD3X~ZpOR87xdTd0aQiK55OzrYlR5woTxWdd7vgH9Awz3tK7r5U8F9F3lwyoUkRZhwZmvg4AjSlB72z~Zm~~2Qzv6wZUCubqfLjn4Jcfj8fIZYED0AnAncWsmTowHgeT2FxUw6gQUfCv1JzLj4ifs4ZcyoPNrTnruoA5MZig0pPRZw0xpdqA9heZFrZu7gJ2tSVlxm07-w3IJZqjr4z8xq6FFiQE6ye0W5m9jQZ03jSw__"
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
