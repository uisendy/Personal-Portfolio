import React from 'react';
import ScrollDown from '../../components/ScrollDownIcon/ScrollDown';

const Hero = () => {
  return (
    <div className=" flex flex-col pt-[2%] w-[87%] mx-[auto] my-0 h-[89vh]">
      {' '}
      <h1 className=" text-5xl md:text-[7rem] ">
        I am{' '}
        <span className="underline text-orange-200 italic">Sendy Inieke</span>{' '}
        <br />
        Jr. Web Developer, <br />
        <span className="">Aspiring Full-Stack Developer</span>
      </h1>
      <ScrollDown xPosition={'92%'} yPosition={'80%'} />
    </div>
  );
};

export default Hero;
