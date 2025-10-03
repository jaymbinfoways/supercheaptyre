import React from 'react';
import { featuredProducts } from '../assets/data';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ProductCard = ({ product }) => (
    <div className="flex-shrink-0 w-64 sm:w-72 bg-light rounded-2xl sm:rounded-3xl shadow-lg text-center p-4 sm:p-6 mx-2 sm:mx-4 h-[25rem] relative">
      
      {/* Image */}
      <div className="relative h-40 sm:h-48 md:h-52 flex items-center justify-center mb-3 sm:mb-4">
        <div className="absolute inset-0 bg-black/5 rounded-full blur-xl"></div>
        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
      </div>
  
      {/* Info */}
      <h3 className="text-lg sm:text-xl font-medium text-[#ED1C24] mb-2 underline text-start">{product.name}</h3>
      <p className="text-text-secondary text-xs sm:text-sm whitespace-pre-line my-1 sm:my-1 leading-relaxed text-start">
        {product.description}
      </p>
      <p className="flex gap-1 text-text-secondary text-xs sm:text-sm mb-12 text-start">
        <p className='font-bold text-[#5A7184]'>Size:</p>{product.size}
      </p>
  
      {/* Button (half in/out) */}
      <button className="absolute w-9/12 sm:w-3/4 md:w-2/3  left-1/2 bottom-0 translate-x-[-50%] translate-y-1/2 bg-primary text-white font-bold py-2 sm:py-3 px-8 sm:px-12 md:px-8 rounded-full hover:bg-red-700 transition-colors text-sm sm:text-base shadow-md">
        Buy Now
      </button>
    </div>
  );
  


const FeaturedProducts = () => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth < 640 ? 280 : 320;
            scrollRef.current.scrollBy({ 
                left: direction * scrollAmount, 
                behavior: 'smooth' 
            });
        }
    };

    // Use class-based navigation to avoid ref timing issues

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-white">
            <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">Featured Products</h2>
                <div className="relative overflow-visible">
                    <Swiper
                        slidesPerView={1.15}
                        spaceBetween={0}
                        freeMode={false}
                        // pagination={{ clickable: true }}
                        navigation={{ prevEl: '.feat-prev', nextEl: '.feat-next' }}
                        breakpoints={{
                            640: { slidesPerView: 2.2, spaceBetween: 16 },
                            768: { slidesPerView: 2.6, spaceBetween: 20 },
                            1024: { slidesPerView: 3.2, spaceBetween: 24 },
                            1280: { slidesPerView: 4, spaceBetween: 24 },
                        }}
                        modules={[FreeMode, Pagination, Navigation]}
                        className="!pb-10"
                    >
                        {featuredProducts.map((product, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Navigation arrows (visible on sm and up) */}
                    <button className="feat-prev hidden sm:flex absolute -left-6 sm:-left-8 md:-left-10 top-1/2 -translate-y-1/2 z-20 p-2 bg-transparent rounded-full hover:bg-gray-100">
                        <ChevronLeft className="text-primary" />
                    </button>
                    <button className="feat-next hidden sm:flex absolute -right-6 sm:-right-8 md:-right-10 top-1/2 -translate-y-1/2 z-20 p-2 bg-transparent rounded-full hover:bg-gray-100">
                        <ChevronRight className="text-primary" />
                    </button>
                </div>
            </div>
        </section>
    );
};
export default FeaturedProducts;
