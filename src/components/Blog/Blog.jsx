import React, { useState } from 'react';
import { blogPosts } from '../../assets/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SectionHeader = ({ title, subtitle }) => (
  <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
    <div className="text-center mb-6 sm:mb-8 md:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-sm sm:text-base text-gray-600">{subtitle}</p>
      )}
    </div>
  </div>
);

const Blog = () => {
  const [activeFormat, setActiveFormat] = useState('carousel'); // 'carousel' | 'cards' | 'alternating'
  const carouselItems = blogPosts.slice(0, 5);
  const verticalCards = blogPosts;
  const alternating = blogPosts.slice(0, 4);

  return (
    <main className="bg-[#F3F3F3]">
      {/* Toggle */}
      <section className="pt-8 sm:pt-10 md:pt-12">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="bg-white rounded-2xl p-2 sm:p-3 shadow-[8px_3px_22px_10px_#9696961C] inline-flex">
            {[
              { key: 'carousel', label: 'Carousel' },
              { key: 'cards', label: 'Cards' },
              { key: 'alternating', label: 'Alternating' },
            ].map((opt) => {
              const active = activeFormat === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => setActiveFormat(opt.key)}
                  className={`px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-base transition-colors ${
                    active ? 'bg-black text-white' : 'bg-transparent text-black hover:bg-gray-100'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Conditional Sections */}
      {activeFormat === 'carousel' && (
        <section className="py-6 sm:py-8 md:py-10">
          <SectionHeader title="Latest Insights" subtitle="Tips and news from Supercheap Tyres" />
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl p-3 sm:p-4 md:p-5 ring-1 ring-gray-200 shadow-sm">
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={16}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3500, disableOnInteraction: false }}
                    autoHeight
                    className="rounded-xl"
                  >
                    {carouselItems.map((item) => (
                      <SwiperSlide key={item.id}>
                        <div className="w-full h-56 sm:h-64 md:h-80 bg-gray-50 flex items-center justify-center">
                          <img src={item.image} alt={item.title} className="block max-h-full max-w-full h-auto w-auto object-contain" />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <hr className="border-gray-200" />
                <div className="flex flex-col justify-center items-center text-center max-w-prose mx-auto">
                  <h3 className="text-xl sm:text-2xl font-semibold text-black">Drive Smarter, Safer</h3>
                  <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base">
                    Explore our curated articles to help you choose, maintain, and get the most out of your tyres. From rotation schedules to seasonal picks, we cover the essentials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeFormat === 'cards' && (
        <section className="py-6 sm:py-8 md:py-10">
          <SectionHeader title="Guides and How‑tos" />
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
            <div className="flex flex-col items-center gap-4 sm:gap-5">
              {verticalCards.map((post) => (
                <article key={post.id} className="w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-[8px_3px_22px_10px_#9696961C] hover:shadow-lg transition-shadow">
                  <div className="w-full h-56 sm:h-64 md:h-80 bg-gray-50 flex items-center justify-center p-2 sm:p-3">
                    <img src={post.image} alt={post.title} className="block max-h-full max-w-full h-auto w-auto object-contain" />
                  </div>
                  <div className="p-4 sm:p-5 text-center">
                    <div className="text-[11px] sm:text-xs text-gray-500 mb-1">{post.date}</div>
                    <h4 className="text-base sm:text-lg font-semibold text-black">{post.title}</h4>
                    <p className="mt-1.5 text-[13px] sm:text-sm text-gray-600">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeFormat === 'alternating' && (
        <section className="py-6 sm:py-8 md:py-10">
          <SectionHeader title="In Focus" />
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8 space-y-6 sm:space-y-8">
            {alternating.map((post, idx) => {
              const imageFirst = idx % 2 === 0;
              return (
                <div key={post.id} className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-[8px_3px_22px_10px_#9696961C]">
                  <div className={`grid md:grid-cols-2 gap-6 md:gap-8 items-center`}>
                    <div className={`${imageFirst ? '' : 'md:order-2'}`}>
                      <div className="w-full h-56 sm:h-64 md:h-80 bg-gray-50 rounded-xl flex items-center justify-center p-2 sm:p-3">
                        <img src={post.image} alt={post.title} className="block max-h-full max-w-full h-auto w-auto object-contain" />
                      </div>
                    </div>
                    <div className={`${imageFirst ? '' : 'md:order-1'}`}>
                      <div className="text-xs text-gray-500 mb-2">{post.date} · {post.author}</div>
                      <h4 className="text-2xl font-semibold text-black">{post.title}</h4>
                      <p className="mt-3 text-gray-600 text-sm sm:text-base">{post.excerpt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
};

export default Blog;

