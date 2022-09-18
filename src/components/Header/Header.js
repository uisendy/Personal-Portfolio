import React from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import SplitText from '../../utils/split3.min.js';
import './header.css';
import ScrollDown from './ScrollDown.js';

const Header = () => {
  useEffect(() => {
    const split = new SplitText('#header', {
      type: 'lines',
      linesClass: 'lineChildren',
    });

    const splitPos = new SplitText('#header-dev', {
      type: 'lines',
      linesClass: 'lineChildrenDev',
    });

    const splitDesc = new SplitText('#header-desc', {
      type: 'lines',
      linesClass: 'lineChildrenDesc',
    });

    new SplitText('#header', {
      type: 'lines',
      linesClass: 'lineParents',
    });
    new SplitText('#header-dev', {
      type: 'lines',
      linesClass: 'lineParents',
    });
    new SplitText('#header-desc', {
      type: 'words,chars',
      linesClass: 'lineParents',
    });
    gsap.to(split.lines, {
      duration: 2,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });

    gsap.to(splitPos.lines, {
      duration: 3,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: 'power2',
    });

    gsap.timeline().from(splitDesc.lines, {
      duration: 3,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: '0% 50% -50',
      ease: 'back',
      stagger: 0.01,
    });
    gsap.set('#header-desc', { perspective: 400 });
  }, []);

  return (
    <section
      data-scroll-section
      className="h-[83.5vh] bg-black text-white w-[100vw]"
    >
      <div className="flex flex-col gap-2 md:gap-0 justify-start pt-12 items-start w-[70%] h-[100%] my-0 mx-auto ">
        <h1
          id="header"
          className=" text-7xl italic md:not-italic md:text-9xl font-extrabold "
        >
          Hi. I'm Sendy
        </h1>
        <p
          id="header-dev"
          className=" text-3xl border-t-[1px] pt-5 md:text-8xl font-light italic md:border-t-0 md:pt-0"
        >
          A software Developer
        </p>
        <p
          id="header-desc"
          className=" hidden uppercase font-montserrat text-left text-sm md:block md:absolute md:top-[70%] md:left-[60%] md:w-[32%]"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
          eligendi, corrupti deserunt libero doloremque nihil! Illum illo,
          officia impedit repellat enim tempora dolore iste non dolorum nostrum
          omnis sed ad vero, in incidunt corrupti necessitatibus rerum. Possimus
          unde sint perspiciatis?
        </p>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Header;
