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
  }, [onScreen, index]);

  return (
    <div
      ref={ref}
      className={cn('projects-wrapper aspect-video h-[100%] w-[100vw]', {
        'is-reveal': onScreen,
      })}
    >
      <div />
      <div className="project-item w-[100%] h-[100%] relative will-change-transform">
        <div className="project-info absolute bottom-[10%] z-10 translate-x-[-20%] w-[60%] px-[3%] pb-[3%]">
          <h1 className=" italic project-info-name text-[4vw] text-bold text-white">
            {project.name}
          </h1>
          <div className="flex gap-2 text-wt font-montserrat">
            <small>{project.technology?.javascript}</small>
            <small>{project.technology?.react}</small>
            <small>{project.technology?.tailwindcss}</small>
            <small>{project.technology?.rubyOnRails}</small>
            <small>{project.technology?.typeScript}</small>
          </div>
          <p className="project-into-description relative mt-[2vh] text-sm font-extralight w-[100%] text-white font-montserrat">
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
      <div />
    </div>
  );
};

export default ProjectList;
