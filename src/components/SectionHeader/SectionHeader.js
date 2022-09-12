import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className=" text-white py-16 px-10 md:px-[6.5%]">
      <h1 className=" font-playFairSc text-4xl md:text-6xl text-center md:text-right md:pr-24">
        {title}
      </h1>
      <p className=" font-montserrat text-sm pt-7 text-center md:text-right md:pr-24">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;
