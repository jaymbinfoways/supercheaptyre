import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Tyre from './components/tyre/Tyre';
import ChatSupport from './components/ChatSupport';
import About from './components/About/About';
import PrivacyPolicy from './components/FooterPage/PrivacyPolicy';
import Terms from './components/FooterPage/Terms';
import { ContactUs } from './components/ContactUs/Contact';
import ProductDetail from './components/TyreProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Appointment from './components/Appointment/Appointment';

function App() {
  return (
    <div className="bg-[#F3F3F3]">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tyres" element={<Tyre />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<Terms/>} />
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/productdetails' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
      </Routes>
      <Footer />
      <ChatSupport />
    </div>
  );
}

export default App;
