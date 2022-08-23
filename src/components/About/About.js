import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

const About = () => {
  return (
    <section className="bg-black text-white w-[100vW] px-[6.5%]">
      <SectionHeader title="About Me" />
      <div className="w-[100%]">
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          dignissimos placeat fuga nihil nemo iusto, velit commodi. Ab facilis
          quidem expedita vitae facere optio perferendis. Molestias laudantium
          corporis fugit ex!
        </p>
      </div>
    </section>
  );
};

export default About;
