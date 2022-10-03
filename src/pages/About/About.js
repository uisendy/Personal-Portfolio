import React, { useEffect } from 'react';
import Hero from './Hero';
import Description from './Description';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useLocation } from 'react-router-dom';
import Skills from './Skills';
import Experience from './Experience';
import Footer from '../../components/Footer/Footer';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  const location = useLocation();

  useEffect(() => {
    ScrollTrigger.refresh();
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <section className="bg-black text-white px-[6.5%]">
      <Hero />
      <Description />
      <Skills />
      <Experience />
      <Footer />
    </section>
  );
};

export default About;
