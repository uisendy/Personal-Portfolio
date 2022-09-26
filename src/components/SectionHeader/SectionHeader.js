import React from 'react';
import { MdOutlineCode } from 'react-icons/md';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className=" text-white pt-16 pb-10 px-10 md:px-[6.5%] md:pr-24 flex justify-end items-center gap-10 opacity-50 hover:opacity-100 transition-all ease-in-out delay-150 duration-300">
      <div>
        <h2 className=" font-playFairSc text-4xl md:text-6xl text-left md:text-right uppercase">
          {title}
        </h2>
        <h3 className=" text-3xl md:text-5xl text-left md:text-right italic ">
          {subtitle}
        </h3>
      </div>
    </div>
  );
};

export default SectionHeader;
