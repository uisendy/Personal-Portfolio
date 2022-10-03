import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Featured from '../../components/Featured/Featured';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../../components/ScrollDownIcon/ScrollToTop';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    <ScrollToTop />;
    ScrollTrigger.refresh();
  }, []);

  return (
    <div>
      <Header />
      <Featured />
      <Footer />
    </div>
  );
};

export default Home;
