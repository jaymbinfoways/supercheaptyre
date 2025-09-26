import React from 'react';
import { ChevronDown } from 'lucide-react';

const FilterSidebar = () => {
  const filterOptions = [
    { label: 'Brand', value: 'All Brand' },
    { label: 'Size', value: 'All Size' },
    { label: 'Type', value: 'All Type' },
    { label: 'Rim Style', value: 'All Rim Style' },
    { label: 'All Price', value: 'All Price' },
  ];

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D5D5D5] shadow-[0_5px_5px_-1px_rgba(0,0,0,0.25)] p-4 sm:p-6 lg:p-8 w-full sm:w-80 lg:w-96 h-fit">
      <h2 className="text-xl sm:text-2xl font-lexend font-medium text-center mb-6 sm:mb-8">Filters</h2>
      
      <div className="space-y-4 sm:space-y-6">
        {filterOptions.map((option, index) => (
          <div key={index} className="space-y-2">
            <label className="text-xs sm:text-sm font-lexend font-regular text-black">
              {option.label}
            </label>
            <div className="relative">
              <div className="border border-gray-400 rounded-sm h-8 sm:h-10"></div>
              <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-3 border border-[#7E7E7E] rounded-[3px] bg-white">
                <span className="text-xs text-[#6F6F6F] font-regular truncate">{option.value}</span>
                <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-dark flex-shrink-0" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full bg-brand-red text-white rounded-[8px] py-2 sm:py-3 mt-6 sm:mt-6 font-lexend font-semibold text-xs sm:text-sm bg-[#ED1C24] hover:bg-red-700 transition-colors">
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;
