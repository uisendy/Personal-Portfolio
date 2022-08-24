import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="text-white py-16 px-[6.5%]">
      <h1 className="text-4xl md:text-6xl">{title}</h1>
      <p className="italic text-2xl md:text-4xl pt-7">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
