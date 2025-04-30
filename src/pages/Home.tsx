import React from 'react';
import Hero from '../components/home/Hero';
import Benefits from '../components/home/Benefits';
import Services from '../components/home/Services';
import Projects from '../components/home/Projects';
import Testimonials from '../components/home/Testimonials';
import SolarCalculator from '../components/home/SolarCalculator';
import CtaSection from '../components/home/CtaSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Services />
      <Projects />
      <Testimonials />
      <SolarCalculator />
      <CtaSection />
    </>
  );
};

export default Home;