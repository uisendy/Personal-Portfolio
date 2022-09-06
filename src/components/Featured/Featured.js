import React, { useState, useRef, useEffect } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import projects from "../../data/PortfolioImage";
import "./featured.css";
import ProjectList from "./ProjectList";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cn from "classnames";
import useOnScreen from "../../hooks/useOnScreen";

const Featured = () => {
  const [activeImage, setActiveImage] = useState(1);
  const [reveal, setReveal] = useState(false);
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    setTimeout(() => {
      const sections = gsap.utils.toArray(".projects-wrapper");
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          start: "top top",
          trigger: ref.current,
          scroller: "#main-container",
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });

      ScrollTrigger.refresh();
    });
  }, []);
  return (
    <section
      data-scroll-section
      className={cn(" text-white bg-black h-[100vh]", { "is-reveal": reveal })}
    >
      {/* <SectionHeader
        title={"Recent Projects"}
        subtitle={"You can go through my recently completed projects"}
      /> */}

      {/* <div className="grid grid-cols-4 gap-3">
        <p className="font-ubuntu font-thin text-xl pt-6 text-gray-500">
          A small gallery of recent projects chosen by me. I've done them all
          together with amazing people from companies around the globe.
        </p>
        <div>
          <h3 className=" font-playFairSc text-2xl">{bouncer.name}</h3>
          <img src={bouncer.image} alt="bouncer-Project" />
        </div>
        <div>
          <h3 className=" font-playFairSc text-2xl">{travelTime.name}</h3>
          <img src={travelTime.image} alt="travelTime-Project" />
        </div>
        <div>
          <h3 className=" font-playFairSc text-2xl">{nondoHouse.name}</h3>
          <img src={nondoHouse.image} alt="Travel-Project" />
        </div>
      </div> */}
      <div
        ref={ref}
        className="projects h-[80vh] py-[10vh] w-[400%] flex flex-nowrap relative bg-green-400"
      >
        <div className="projects-counter absolute top-[5%] left-[100px] z-10 mix-blend-difference text-base text-white inline-block ">
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
