import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FilterSidebar = () => {
  const filterOptions = [
    { label: 'Brand', key: 'brand', placeholder: 'All Brand' },
    { label: 'Size', key: 'size', placeholder: 'All Size' },
    { label: 'Type', key: 'type', placeholder: 'All Type' },
    { label: 'Rim Style', key: 'rimStyle', placeholder: 'All Rim Style' },
    { label: 'Price', key: 'price', placeholder: 'All Price' },
  ];

  // Demo dropdown data
  const demoOptions = {
    brand: ['All Brand', 'Michelin', 'Pirelli', 'Goodyear', 'Continental', 'Hankook', 'Nexen'],
    size: ['All Size', '175/65 R14', '185/65 R15', '195/60 R15', '205/55 R16', '215/60 R16', '225/45 R17'],
    type: ['All Type', 'Summer', 'Winter', 'All-Season', 'Performance'],
    rimStyle: ['All Rim Style', 'Steel', 'Alloy', 'Chrome', 'Matte Black'],
    price: ['All Price', 'Under $100', '$100 - $200', '$200 - $300', 'Above $300'],
  };

  const [selected, setSelected] = useState({
    brand: 'All Brand',
    size: 'All Size',
    type: 'All Type',
    rimStyle: 'All Rim Style',
    price: 'All Price',
  });

  const handleChange = (key) => (e) => {
    setSelected((prev) => ({ ...prev, [key]: e.target.value }));
  };

  const handleApply = () => {
    // demo action - replace with real filter handler
    // eslint-disable-next-line no-console
    console.log('Applied filters:', selected);
    alert('Filters applied (demo):\n' + JSON.stringify(selected, null, 2));
  };

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#D5D5D5] shadow-[0_5px_5px_-1px_rgba(0,0,0,0.25)] p-4 sm:p-6 lg:p-8 w-full sm:w-80 lg:w-96 h-fit">
      <h2 className="text-xl sm:text-2xl font-lexend font-medium text-center mb-6 sm:mb-8">Filters</h2>
      
      <div className="space-y-4 sm:space-y-6">
        {filterOptions.map((option) => (
          <div key={option.key} className="space-y-2">
            <label className="text-xs sm:text-sm font-lexend font-regular text-black">
              {option.label}
            </label>
            <div className="relative">
              <select
                value={selected[option.key]}
                onChange={handleChange(option.key)}
                className="w-full appearance-none border border-[#7E7E7E] rounded-[3px] bg-white text-[#6F6F6F] text-xs sm:text-sm h-8 sm:h-10 px-2 sm:px-3 pr-6 focus:outline-none focus:ring-1 focus:ring-[#ED1C24]"
              >
                {demoOptions[option.key].map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 sm:w-4 sm:h-4 text-gray-dark" />
            </div>
          </div>
        ))}
      </div>

      <button onClick={handleApply} className="w-full bg-brand-red text-white rounded-[8px] py-2 sm:py-3 mt-6 sm:mt-6 font-lexend font-semibold text-xs sm:text-sm bg-[#ED1C24] hover:bg-red-700 transition-colors">
        Apply Filter
      </button>
    </div>
  );
};

export default FilterSidebar;
