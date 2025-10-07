import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from './ui/Button';
import QuantityInput from './ui/QuantityInput';

// Removed top-level await dynamic imports; using static imports above

const ProductInfo = (product) => {
  const [quantity, setQuantity] = useState(1);

  // const specifications = [
  //   { label: 'Brand :', value: 'Apollo', icon: '/productdetails/brand.svg' },
  //   { label: 'Size :', value: '205/60R16', icon: '/productdetails/size.svg' },
  //   { label: 'Tread type :', value: 'Type', icon: '/productdetails/tread.svg' },
  //   { label: 'Stock :', value: '2', icon: '/productdetails/stock.svg' },
  //   { label: 'Bolt pattern :', value: 'Bolt pattern', icon: '/productdetails/bolt.svg' },
  //   { label: 'Offset :', value: 'offset', icon: '/productdetails/Offset.svg' }
  // ];
  const specifications = [
    { label: 'Brand :', value: product.product.brand, icon: '/productdetails/brand.svg' },
    {
      label: 'Size :',
      value: product.product.tyreSpecifications
        ? `${product.product.tyreSpecifications.width}/${product.product.tyreSpecifications.profile}${product.product.tyreSpecifications.speedRating}${product.product.tyreSpecifications.diameter}`
        : 'N/A',
      icon: '/productdetails/size.svg'
    },
    { label: 'Stock :', value: product.product.stock, icon: '/productdetails/stock.svg' },
    // { label: 'Bolt pattern :', value: 'Bolt pattern', icon: '/productdetails/bolt.svg' },
    // { label: 'Offset :', value: 'offset', icon: '/productdetails/Offset.svg' },
    { label: 'Tread type :', value: product.product.tyreSpecifications?.pattern || 'N/A', icon: '/productdetails/tread.svg' },
    
  ];

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const cartRaw = localStorage.getItem('cartItems');
    const cart = cartRaw ? JSON.parse(cartRaw) : [];
    const productId = product.product.id;
    const existingIndex = cart.findIndex((ci) => ci.id === productId);
    if (existingIndex >= 0) {
      cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + quantity;
    } else {
      cart.push({
        id: productId,
        image: product.product.images?.[0] || '/cart/carttyre.svg',
        name: product.product.name || product.product.brand || 'Tyre',
        brand: product.product.brand,
        size: product.product.tyreSpecifications
          ? `${product.product.tyreSpecifications.width}/${product.product.tyreSpecifications.profile}${product.product.tyreSpecifications.speedRating}${product.product.tyreSpecifications.diameter}`
          : 'N/A',
        price: product.product.price || 0,
        quantity,
      });
    }
    localStorage.setItem('cartItems', JSON.stringify(cart));
    localStorage.setItem('cartCount', String(cart.reduce((s, it) => s + (it.quantity || 1), 0)));
    toast.success('Added to cart');
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[14px] lg:gap-[16px] w-full">
        {/* Product Specifications */}
        <div className="flex flex-col w-full">
          {/* Specification Header */}
          {/* <div className="flex justify-center items-center w-auto border border-white mb-[-2px]">
                
              </div> */}

          {/* Specifications List */}
          <div className="border border-[#e0e0e0] rounded-[14px] bg-white px-[16px] sm:px-[18px] md:px-[20px] lg:px-[22px] py-[10px]">
            <h3 className="text-[18px] sm:text-[19px] md:text-[20px] font-medium leading-[23px] sm:leading-[24px] md:leading-[25px] font-['Lexend'] text-black py-[12px] px-[6px]">
              Product Specification
            </h3>
            {specifications?.map((spec, index) => (
              <div
                key={index}
                className={`flex justify-start items-center w-full ${index > 0 ? 'mt-[-2px]' : ''} ${index === specifications?.length - 1 ? 'mb-[8px]' : ''}`}
              >
                <img
                  src={spec?.icon}
                  alt="specification icon"
                  className="w-[20px] h-[20px] object-contain flex-shrink-0"
                />
                <span className="text-[14px] sm:text-[15px] font-normal leading-[18px] sm:leading-[19px] font-['Lexend'] text-black border border-white py-[10px] px-[10px] w-[140px] flex-shrink-0">
                  {spec?.label}
                </span>
                <Button
                  text={spec?.value}
                  text_font_size="16"
                  text_font_family="Lexend"
                  text_font_weight="400"
                  text_line_height="20px"
                  text_color="#6e6d6d"
                  border_border="1px solid #ffffff"
                  padding="10px"
                  margin="0 0 0 14px"
                  layout_align_self=""
                  fill_background_color=""
                  border_border_radius=""
                  layout_width=""
                  position=""
                  variant=""
                  size=""
                  className=""
                  onClick={() => { }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="flex justify-center items-center w-full py-[10px] px-[10px]">
          <span className="flex-none text-[18px] sm:text-[19px] md:text-[20px] font-medium leading-[23px] sm:leading-[24px] md:leading-[25px] font-['Lexend'] text-black">
            Quantity :
          </span>
          <div className="flex justify-start items-center w-full ml-[10px]">
            <QuantityInput
              initialValue={quantity}
              onChange={handleQuantityChange}
              className="px-[10px]"
            />
          </div>
        </div>


        {/* Add to Cart Button */}
        <Button
          text="Add To Cart"
          text_font_size="16"
          text_font_family="Lexend"
          text_font_weight="600"
          text_line_height="20px"
          text_color="#ffffff"
          fill_background_color="#ed1c24"
          border_border_radius="10px"
          layout_width="100%"
          padding="14px 34px"
          onClick={handleAddToCart}
          layout_align_self=""
          position=""
          variant=""
          size=""
          className=""
          margin=""
        />
      </div>
    </div>
  );
};

export default ProductInfo;