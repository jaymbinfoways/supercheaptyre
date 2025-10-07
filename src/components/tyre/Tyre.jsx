import React, { useEffect, useMemo, useState } from 'react';
import BreadcrumbSection from './BreadcrumbSection';
import FilterSidebar from './FilterSidebar';
import TyreGrid from './TyreGrid';
import Pagination from './Pagination';
import HeroBanner from './HeroBanner';
import { getTyres } from '../../axios/axios';
import { getTyreImageUrl } from '../../Utils/Utils';

function Tyre() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from API with axios
  useEffect(() => {
    const fetchTyres = async () => {
      try {
        const response = await getTyres();
        console.log("API Response:", response.data);

        // extract and map response
        const items = response.data?.data?.items || [];

        const mappedProducts = items
          .filter((item) => item.category === "tyre") // 👈 only tyres
          .map((item) => ({
            id: item._id,
            image: getTyreImageUrl(item.images?.[0]), // fallback image
            brand: item.brand,
            name: item.name,
            size: item.tyreSpecifications
              ? `${item.tyreSpecifications.width}/${item.tyreSpecifications.profile}${item.tyreSpecifications.speedRating}${item.tyreSpecifications.diameter}`
              : "",
            price: item.price,
            rating: 4, // API doesn’t return rating → you can adjust
          }));

        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching tyres:", error);
      }
    };

    fetchTyres();
  }, []);

  // Pagination
  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(products.length / pageSize));

  const pageItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return products.slice(start, start + pageSize);
  }, [products, currentPage]);

  return (
    <main className="bg-[#F3F3F3]">
      <div className="max-w-screen-2xl mx-auto px-3 sm:px-4 lg:px-8">
        <BreadcrumbSection />
        <div className="py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            {/* Left Sidebar */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <FilterSidebar />
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl sm:text-3xl font-lexend font-regular text-black py-3 pb-8">
                  Tyres
                </h2>
                <p className="text-sm sm:text-base font-lexend font-regular text-[#7A7A7A] max-w-xl">
                  The new attractive asymmetric tread design offers superior handling and braking performances on both dry and wet surfaces.
                </p>
              </div>

              {/* Product Grid */}
              <TyreGrid products={pageItems} />
            </div>
          </div>
        </div>

        <div className="sm:ps-96">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>

        <HeroBanner />
      </div>
    </main>
  );
}

export default Tyre;
