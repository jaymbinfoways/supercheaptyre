const TyreCard = ({
  image,
  brand,
  model,
  size,
  price,
  rating,
}) => {
  const renderStars = () => {
    const SolidStar = ({ size = 20, className = '' }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27z" />
    </svg>
);
    return Array.from({ length: 5 }, (_, index) => (
      <SolidStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'fill-[#FF9D00] text-[#FF9D00]' : 'fill-[#DADADA] text-[#DADADA]'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white max-h-[31rem] min-h-[29rem] w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto  rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group hover:shadow-[0_35px_60px_-12px_rgba(0,0,0,0.35)] transition-shadow">
      {/* Product Image */}
      <div className="bg-white rounded-t-3xl flex items-center justify-center mt-8 ">
        <img
          src={image}
          alt={`${brand} ${model}`}
          className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="sm:p-6 sm:mt-10 lg:mt-10">
        <div className="space-y-1">
          <h3 className="text-xl font-lexend font-medium text-[#ED1C24]">{brand}</h3>
          <p className="text-sm text-[#7A7A7A] font-roboto">{model}</p>
          <p className="text-sm text-[#7A7A7A] font-roboto font-bold">{size}</p>
        </div>

        <div className="flex items-center space-x-1 py-1">
          {renderStars(rating)}
        </div>

        <div className="text-lg font-lexend font-medium text-black">
          ${price}
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="px-6 pb-6 flex items-center justify-center space-x-4">
        <button className="w-3/4 bg-[#ED1C24]  text-white rounded-lg py-3 font-lexend font-medium text-sm hover:bg-red-700 transition-colors">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default TyreCard;