import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
import Category from './components/Category.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Navbar  />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
      <Footer />  
    </>
  );
}

export default App;
