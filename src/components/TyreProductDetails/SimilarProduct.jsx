import React from 'react';
import Link from './ui/Link';

const SimilarProducts = () => {
  const similarProducts = [
    {
      id: 1,
      brand: 'Achilles',
      image: '/home/product.svg',
      ratingImage: '/images/img_group_1496.svg',
      description: '165/65R13 4\nPlatinum 7 77H BSW',
      size: '165/65R13'
    },
    {
      id: 2,
      brand: 'Achilles',
      image: '/home/product.svg',
      ratingImage: '/images/img_group_1496.svg',
      description: '165/65R13 4\nPlatinum 7 77H BSW',
      size: '165/65R13'
    },
    {
      id: 3,
      brand: 'Achilles',
      image: '/home/product.svg',
      ratingImage: '/images/img_group_1496.svg',
      description: '165/65R13 4\nPlatinum 7 77H BSW',
      size: '165/65R13'
    },
    {
      id: 4,
      brand: 'Achilles',
      image: '/home/product.svg',
      ratingImage: '/images/img_group_1496.svg',
      description: '165/65R13 4\nPlatinum 7 77H BSW',
      size: '165/65R13'
    }
  ];

  return (
    <section className="w-full bg-[#f5f5f5] py-[20px] sm:py-[25px] md:py-[30px] lg:py-[40px]">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="mx-[25px] sm:mx-[35px] md:mx-[40px] lg:mx-[50px]">
          <div className="flex justify-center items-center w-full">
            <div className="border border-[#dadada] rounded-[14px] bg-white p-[16px] w-full">
              <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] lg:gap-[22px] w-full max-w-[94%] mx-auto mb-[16px]">
                {/* Section Header */}
                <div className="flex justify-between items-start w-full">
                  <h2 className="text-[24px] sm:text-[28px] md:text-[30px] lg:text-[32px] font-medium leading-[30px] sm:leading-[35px] md:leading-[38px] lg:leading-[40px] font-['Lexend'] text-[#ed1c24] self-center">
                    Similar Tyres
                  </h2>
                  <Link 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {}}
                    className="text-[12px] sm:text-[13px] md:text-[14px] font-normal leading-[16px] sm:leading-[17px] md:leading-[18px] font-['Lexend'] text-black underline mt-[8px] sm:mt-[10px] md:mt-[12px] hover:text-[#ed1c24] transition-colors"
                  >
                    View more
                  </Link>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[25px] md:gap-[30px] lg:gap-[40px] w-full">
                  {similarProducts?.map((product) => (
                    <div 
                      key={product?.id}
                      className="flex flex-col justify-end items-start w-full border border-[#c8c8c8] rounded-[10px] bg-white p-[20px] sm:p-[24px] md:p-[26px] lg:p-[28px_30px] hover:shadow-lg transition-shadow"
                    >
                      {/* Product Image and Rating */}
                      <div className="flex flex-col gap-[6px] items-center w-full mb-[20px] sm:mb-[24px] md:mb-[26px] lg:mb-[28px]">
                        <img 
                          src={product?.image} 
                          alt={`${product?.brand} Tyre Product`}
                          className="w-full max-w-[218px] h-[218px] object-contain"
                        />                     
                      </div>
                      {/* Product Brand */}
                      <Link 
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {}}
                        className="text-[18px] sm:text-[19px] md:text-[20px] font-medium leading-[23px] sm:leading-[24px] md:leading-[25px] tracking-[1px] font-['Lexend'] text-[#ed1c24] underline hover:opacity-80 transition-opacity"
                      >
                        {product?.brand}
                      </Link>

                      {/* Product Details */}
                      <div className="flex flex-col gap-[4px] w-full mt-[6px]">
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[16px] sm:leading-[17px] md:leading-[18px] font-['Roboto'] text-[#5a7184] whitespace-pre-line">
                          {product?.description}
                        </p>
                        <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[17px] sm:leading-[18px] md:leading-[19px] font-['Roboto'] text-[#5a7184]">
                          <span className="font-bold text-[#888888]">Size: </span>
                          <span className="font-normal">{product?.size}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimilarProducts;