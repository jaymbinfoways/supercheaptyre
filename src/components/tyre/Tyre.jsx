import React, { useMemo, useState } from 'react';
import BreadcrumbSection from './BreadcrumbSection';
import FilterSidebar from './FilterSidebar';
import TyreGrid from './TyreGrid';
import Pagination from './Pagination';
import HeroBanner from './HeroBanner';

function Tyre() {
  // Source list to paginate. In real app, fetch from API.
  const allProducts = useMemo(() => [
    { id: 1, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 999, rating: 2 },
    { id: 2, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 999, rating: 4 },
    { id: 3, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 999, rating: 4 },
    { id: 4, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 999, rating: 4 },
    { id: 5, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 999, rating: 4 },
    { id: 6, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 9994, rating: 4 },
    { id: 7, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 9995, rating: 4 },
    { id: 8, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 9999, rating: 4 },
    { id: 9, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 9998, rating: 4 },
    { id: 10, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 9959, rating: 4 },
    { id: 11, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 9599, rating: 4 },
    { id: 12, image: '/tyre/tyrecardtyre.svg', brand: 'Achilles', model: 'Platinum 7 77H BSW', size: 'Size: 165/65R13', price: 5, rating: 4 }
  ], []);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // items per page
  const totalPages = Math.max(1, Math.ceil(allProducts.length / pageSize));
  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return allProducts.slice(start, start + pageSize);
  }, [allProducts, currentPage]);

  return (
    <main className="bg-[#F3F3F3]">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
        <BreadcrumbSection />
        {/* Main Content */}
        <div className="py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <FilterSidebar />
            </div>

            {/* Right Content - Products */}
            <div className="flex-1">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-lexend font-regular text-black py-3 pb-8">
                  Tyres
                </h2>
                <p className="text-sm sm:text-base font-lexend font-regular text-[#7A7A7A] max-w-2xl">
                  The new attractive asymmetric tread design offers superior handling and braking performances on both dry and wet surfaces.
                </p>
              </div>

              <TyreGrid products={pageItems} />
            </div>
          </div>
        </div>
        <div className="sm:ps-96">
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
        <HeroBanner />
      </div>
    </main>
  );
}

export default Tyre;
