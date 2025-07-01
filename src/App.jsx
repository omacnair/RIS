import React, { useRef } from 'react';
import Header from './components/layout/Header/Header';
import Hero from './components/sections/Hero/Hero';

import Products from './components/sections/Products/Products';
import Consultation from './components/sections/Consultation/Consultation';
import Contacts from './components/sections/Contacts/Contacts';
import Footer from './components/layout/Footer/Footer';
import './index.css';

function App() {
  const aboutRef = useRef(null);
  const productsRef = useRef(null);
  const consultationRef = useRef(null);

  const scrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header scrollTo={{ aboutRef, productsRef, consultationRef }} />
      
      <Hero />
      
     
      
      <section ref={productsRef}>
        <Products />
      </section>
      
      <section ref={consultationRef}>
        <Consultation />
      </section>
      
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;