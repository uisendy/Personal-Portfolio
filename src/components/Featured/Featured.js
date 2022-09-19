import React, { useState, useRef, useEffect } from 'react';
import SectionHeader from '../SectionHeader/SectionHeader';
import projects from '../../data/PortfolioImage';
import './featured.css';
import ProjectList from './ProjectList';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import cn from 'classnames';
import ScrollDown from '../Header/ScrollDown';

const Featured = () => {
  const [activeImage, setActiveImage] = useState(1);
  const [reveal, setReveal] = useState(false);
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setTimeout(() => {
      const sections = gsap.utils.toArray('.projects-wrapper');
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: ref.current,
          scroller: '#main-container',
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}px`,
          pinSpacing: true,
        },
      });

      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <section
      data-scroll-section
      className={cn(' text-white bg-black overflow-hidden', {
        'is-reveal': reveal,
      })}
    >
      <SectionHeader
        title={'Recent Projects'}
        subtitle={'You can go through my recently completed projects'}
      />

      <div
        ref={ref}
        id="projects"
        className="projects h-[40vh] md:h-[100vh] md:pt-[15vh] md:pb-[2vh] md:w-[500%] flex flex-nowrap relative"
      >
        <div className="projects-counter absolute top-[10%] left-[100px] z-10 mix-blend-difference text-base text-white inline-block ">
          <span>{activeImage}</span>
          <span className="divider bg-white w-[6.25vw] my-[7px] mx-[10px] h-[1px] inline-block" />
          <span>{projects.length}</span>
        </div>
        {projects.map((project, index) => (
          <ProjectList
            key={project.id}
            project={project}
            index={index}
            activeImage={activeImage}
            updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;
