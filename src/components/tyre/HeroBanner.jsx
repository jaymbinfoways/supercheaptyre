import React from 'react';

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-blue-900 rounded-2xl sm:rounded-3xl mx-4 sm:mx-8 lg:mx-12 my-6 sm:my-8 lg:my-8 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/2382/5df6/7e6af0c0e8ee61e32acd2dcfb9a70dc6?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sYFLru2UL09~ZNVlw8HwkkvHRglwPGKWgmH8GTbBT2KTdVcl4BA1pITzCeL6rjz-Lt7zAhSRQhwFfX0p51n14F4KEkruFgKwiHxNLerPV8JpE1XftxkulJphqcr4Xj1GaXBcqlLCVjEISe1kDyiRvBDmdNFLipY-TyG5G0~3KiWAKRrUV0BstjUSn1uHgYwKOE8hTx~bQcN0JPSKvPRfBufP5XtTU4rg~d9OxbL85LyxRhx~dOaHwyiyk8SDdwOoLgyRyQMCWNYZKSnoPpw7TwfNsP7mwBN5G6tP~C89e1Ppb0eq-FEleAncSxRagHLPCPH1QD0cNzFq9MIQkPpDpg__"
          alt="Tyre Banner"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="relative z-10 flex items-center justify-center h-64 sm:h-80 lg:h-96 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-roboto font-black text-white text-center leading-tight tracking-wide">
          Grip the road. Trust your drive
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
