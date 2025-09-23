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
    <div className="flex-shrink-0 w-64 sm:w-72 bg-light rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden text-center p-4 sm:p-6 mx-2 sm:mx-4">
        <div className="relative h-40 sm:h-48 md:h-52 flex items-center justify-center mb-3 sm:mb-4">
            <div className="absolute inset-0 bg-black/5 rounded-full blur-xl"></div>
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
        </div>
        <h3 className="text-lg sm:text-xl font-medium text-dark mb-2">{product.name}</h3>
        <p className="text-text-secondary text-xs sm:text-sm whitespace-pre-line my-1 sm:my-2 leading-relaxed">{product.description}</p>
        <p className="text-text-secondary font-bold text-xs sm:text-sm mb-3 sm:mb-4">{product.size}</p>
        <button className="bg-primary text-white font-bold py-2 sm:py-3 px-8 sm:px-12 md:px-16 rounded-full hover:bg-red-700 transition-colors text-sm sm:text-base w-full sm:w-auto">
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
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-8 sm:mb-10 md:mb-12 text-center sm:text-left">Featured Products</h2>
                <div className="relative">
                    <Swiper
                        slidesPerView={1.15}
                        spaceBetween={0}
                        freeMode={true}
                        pagination={{ clickable: true }}
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
                    <button className="feat-prev hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                        <ChevronLeft className="text-primary" />
                    </button>
                    <button className="feat-next hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md hover:bg-gray-100">
                        <ChevronRight className="text-primary" />
                    </button>
                </div>
            </div>
        </section>
    );
};
export default FeaturedProducts;
