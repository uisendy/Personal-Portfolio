import React, { useEffect } from 'react';
import Hero from './Hero';
import Description from './Description';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToTop from '../../components/ScrollDownIcon/ScrollToTop';
import Skills from './Skills';

const About = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    <ScrollToTop />;
    ScrollTrigger.refresh();
  }, []);
  return (
    <section className="bg-black text-white px-[6.5%]">
      <Hero />
      <Description />
      <Skills />
    </section>
  );
};

export default About;
