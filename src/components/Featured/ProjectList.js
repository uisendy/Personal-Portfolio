import React from "react";
import "./projectlist.css";

const ProjectList = ({ key, index, activeImage, setActiveImage, project }) => {
  const updateActiveImage = (index) => {
    setActiveImage(index + 1);
  };
  return (
    <div className="projects-wrapper aspect-video h-[100%] w-[100vw]">
      <div />
      <div className="project-item w-[100%] h-[100%] relative will-change-transform">
        <div className="project-info absolute bottom-[10%] z-10 translate-x-[-20%] bg-gray-800 w-[60%] px-[2%] pb-[2%]">
          <h1 className="project-info-name text-[4vw] text-bold text-white">
            {project.name}
          </h1>
          <div className="flex gap-2 text-wt">
            <small>{project.technology?.javascript}</small>
            <small>{project.technology?.react}</small>
            <small>{project.technology?.tailwindcss}</small>
            <small>{project.technology?.rubyOnRails}</small>
            <small>{project.technology?.typeScript}</small>
          </div>
          <p className="project-into-description relative mt-[2vh] text-xl w-[100%] text-white">
            {project.description}
          </p>
        </div>
        <div
          className="project-image bg-cover will-change-transform bg-center origin-center w-[100%] h-[100%] scale-100"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
      </div>
      <div />
    </div>
  );
};

export default ProjectList;
