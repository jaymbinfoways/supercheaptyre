import React from 'react';
import TyreCard from './TyreCard';

// Fallback sample data (used only if products prop is not provided)
const SAMPLE_PRODUCTS = [
    {
      id: 1,
      image: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/0fef/9c08/e3352fab1d3a5ef0bedc427599f1a5f0?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dlz-VPO8iN0nzr0wbn~mt9rPdfVOV03CJoRHuLNgFpcJ6jpN77S7tmWSZflAtMqZaB45CtIO8pDUjMu1JZd3~1ztfzMfdxLalXjIkLCdSyhBfAh7YfVB3HWbZfYbaBaLAhWRAwHYbg8s2NUXjgzKZ3jUU8UkS5BEW6wN0Jxfi0yHeyK2nc-5u56~KBK8oQ93t67dtq9VlNrULEHXJKJOQWNKWbGwT-k3HrWsBD0Yf4QoLDUBTZhT5MsospOejUq~XUQROCU3Fqz3SXN5BB85z4Ll3sVVktl5ZYPJjBBq8nuTnOTr5g7xae0gqdg76dpBTgvM9zWkZi-pU4lymO1bOw__',
      brand: 'Achilles',
      model: 'Platinum 7 77H BSW',
      size: '165/65R13',
      price: 999,
      rating: 4,
    },
    {
      id: 2,
      image: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/0fef/9c08/e3352fab1d3a5ef0bedc427599f1a5f0?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dlz-VPO8iN0nzr0wbn~mt9rPdfVOV03CJoRHuLNgFpcJ6jpN77S7tmWSZflAtMqZaB45CtIO8pDUjMu1JZd3~1ztfzMfdxLalXjIkLCdSyhBfAh7YfVB3HWbZfYbaBaLAhWRAwHYbg8s2NUXjgzKZ3jUU8UkS5BEW6wN0Jxfi0yHeyK2nc-5u56~KBK8oQ93t67dtq9VlNrULEHXJKJOQWNKWbGwT-k3HrWsBD0Yf4QoLDUBTZhT5MsospOejUq~XUQROCU3Fqz3SXN5BB85z4Ll3sVVktl5ZYPJjBBq8nuTnOTr5g7xae0gqdg76dpBTgvM9zWkZi-pU4lymO1bOw__',
      brand: 'Achilles',
      model: 'Platinum 7 77H BSW',
      size: '165/65R13',
      price: 999,
      rating: 4,
    },
    {
      id: 3,
      image: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/0fef/9c08/e3352fab1d3a5ef0bedc427599f1a5f0?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dlz-VPO8iN0nzr0wbn~mt9rPdfVOV03CJoRHuLNgFpcJ6jpN77S7tmWSZflAtMqZaB45CtIO8pDUjMu1JZd3~1ztfzMfdxLalXjIkLCdSyhBfAh7YfVB3HWbZfYbaBaLAhWRAwHYbg8s2NUXjgzKZ3jUU8UkS5BEW6wN0Jxfi0yHeyK2nc-5u56~KBK8oQ93t67dtq9VlNrULEHXJKJOQWNKWbGwT-k3HrWsBD0Yf4QoLDUBTZhT5MsospOejUq~XUQROCU3Fqz3SXN5BB85z4Ll3sVVktl5ZYPJjBBq8nuTnOTr5g7xae0gqdg76dpBTgvM9zWkZi-pU4lymO1bOw__',
      brand: 'Achilles',
      model: 'Platinum 7 77H BSW',
      size: '165/65R13',
      price: 999,
      rating: 4,
    },
    {
      id: 4,
      image: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/0fef/9c08/e3352fab1d3a5ef0bedc427599f1a5f0?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dlz-VPO8iN0nzr0wbn~mt9rPdfVOV03CJoRHuLNgFpcJ6jpN77S7tmWSZflAtMqZaB45CtIO8pDUjMu1JZd3~1ztfzMfdxLalXjIkLCdSyhBfAh7YfVB3HWbZfYbaBaLAhWRAwHYbg8s2NUXjgzKZ3jUU8UkS5BEW6wN0Jxfi0yHeyK2nc-5u56~KBK8oQ93t67dtq9VlNrULEHXJKJOQWNKWbGwT-k3HrWsBD0Yf4QoLDUBTZhT5MsospOejUq~XUQROCU3Fqz3SXN5BB85z4Ll3sVVktl5ZYPJjBBq8nuTnOTr5g7xae0gqdg76dpBTgvM9zWkZi-pU4lymO1bOw__',
      brand: 'Achilles',
      model: 'Platinum 7 77H BSW',
      size: '165/65R13',
      price: 999,
      rating: 4,
    },
    {
      id: 5,
      image: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/0fef/9c08/e3352fab1d3a5ef0bedc427599f1a5f0?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dlz-VPO8iN0nzr0wbn~mt9rPdfVOV03CJoRHuLNgFpcJ6jpN77S7tmWSZflAtMqZaB45CtIO8pDUjMu1JZd3~1ztfzMfdxLalXjIkLCdSyhBfAh7YfVB3HWbZfYbaBaLAhWRAwHYbg8s2NUXjgzKZ3jUU8UkS5BEW6wN0Jxfi0yHeyK2nc-5u56~KBK8oQ93t67dtq9VlNrULEHXJKJOQWNKWbGwT-k3HrWsBD0Yf4QoLDUBTZhT5MsospOejUq~XUQROCU3Fqz3SXN5BB85z4Ll3sVVktl5ZYPJjBBq8nuTnOTr5g7xae0gqdg76dpBTgvM9zWkZi-pU4lymO1bOw__',
      brand: 'Achilles',
      model: 'Platinum 7 77H BSW',
      size: '165/65R13',
      price: 999,
      rating: 4,
    },
    {
      id: 6,
      image: 'https://img-wrapper.vercel.app/image?url=https://s3-alpha-sig.figma.com/img/0fef/9c08/e3352fab1d3a5ef0bedc427599f1a5f0?Expires=1759708800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dlz-VPO8iN0nzr0wbn~mt9rPdfVOV03CJoRHuLNgFpcJ6jpN77S7tmWSZflAtMqZaB45CtIO8pDUjMu1JZd3~1ztfzMfdxLalXjIkLCdSyhBfAh7YfVB3HWbZfYbaBaLAhWRAwHYbg8s2NUXjgzKZ3jUU8UkS5BEW6wN0Jxfi0yHeyK2nc-5u56~KBK8oQ93t67dtq9VlNrULEHXJKJOQWNKWbGwT-k3HrWsBD0Yf4QoLDUBTZhT5MsospOejUq~XUQROCU3Fqz3SXN5BB85z4Ll3sVVktl5ZYPJjBBq8nuTnOTr5g7xae0gqdg76dpBTgvM9zWkZi-pU4lymO1bOw__',
      brand: 'Achilles',
      model: 'Platinum 7 77H BSW',
      size: '165/65R13',
      price: 999,
      rating: 4,
    },
  ];

const TyreGrid = ({ products }) => {
  const items = products && products.length ? products : SAMPLE_PRODUCTS;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-10 lg:gap-12">
      {items.map((product) => (
        <TyreCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default TyreGrid;
