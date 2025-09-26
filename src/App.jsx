import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Tyre from './components/tyre/Tyre';
import ChatSupport from './components/ChatSupport';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <div className="bg-[#F3F3F3]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tyres" element={<Tyre />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
        <ChatSupport />
      </div>
    </Router>
  );
}

export default App;
