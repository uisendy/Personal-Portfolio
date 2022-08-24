import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import projects from "../../data/PortfolioImage";
import "./featured.css";
import ProjectList from "./ProjectList";

const Featured = () => {
  const [activeImage, setActiveImage] = useState(1);
  return (
    <section className=" text-white bg-black">
      <SectionHeader
        title={"Recent Projects"}
        subtitle={"You can go through my recently completed projects"}
      />

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
      <div className="projects h-[80vh] py-[10vh] w-[400%] flex flex-nowrap relative">
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
            setActiveImage={setActiveImage}
            activeImage={activeImage}
            // updateActiveImage={(index) => setActiveImage(index + 1)}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;
