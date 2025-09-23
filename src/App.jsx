import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BuyTyre from './components/BuyTyre';
import FeaturedProducts from './components/FeaturedProducts';
import TireShowcase from './components/TireShowcase';
import Brands from './components/Brands';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import AppointmentBanner from './components/AppointmentBanner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        {/* <BuyTyre /> */}
        <FeaturedProducts />
        <TireShowcase />
        <Brands />
        <WhyChooseUs />
        <Testimonials />
        <AppointmentBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;
