import React, { useEffect, useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import cn from 'classnames';
import './projectlist.css';

const ProjectList = ({ updateActiveImage, project, index }) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.3);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index, updateActiveImage]);

  return (
    <div
      ref={ref}
      className={cn('projects-wrapper aspect-video h-[100%] w-[100vw]', {
        'is-reveal': onScreen,
      })}
    >
      <div className="hidden md:block" />
      <div className="project-item w-[70%] h-[70%] mx-[auto] md:w-[100%] md:h-[100%] md:relative md:will-change-transform">
        <div className="project-info md:block md:absolute md:bottom-[10%] md:z-10 md:translate-x-[-20%] md:w-[60%] md:px-[3%]md:pb-[3%]">
          <h1 className="project-info-name  text-center md:text-left italic text-[4vw] text-bold text-white pt-10 pb-3 md:pb-0 md:pt-0">
            {project.name}
          </h1>
          <div className=" hidden md:flex gap-2 text-wt font-montserrat">
            <small>{project.technology?.javascript}</small>
            <small>{project.technology?.react}</small>
            <small>{project.technology?.tailwindcss}</small>
            <small>{project.technology?.rubyOnRails}</small>
            <small>{project.technology?.typeScript}</small>
          </div>
          <p className="project-into-description hidden md:block relative mt-[2vh] text-sm font-extralight w-[100%] text-white font-montserrat">
            {project.description}
          </p>
        </div>
        <div
          className={cn(
            'project-image bg-cover will-change-transform bg-center origin-center w-[100%] h-[100%] scale-100',
            { 'is-reveal': onScreen },
          )}
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
      </div>
      <div className="hidden md:block" />
    </div>
  );
};

export default ProjectList;
