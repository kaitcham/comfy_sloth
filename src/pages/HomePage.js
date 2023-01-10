import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Contact from '../components/Contact';
import FeaturedProducts from '../components/FeaturedProducts';

const HomePage = () => (
  <main>
    <Hero />
    <FeaturedProducts />
    <Services />
    <Contact />
  </main>
);

export default HomePage;
