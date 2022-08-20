import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import PortfolioImages from "../../data/PortfolioImage";
import "./featured.css";

const Featured = () => {
  const [bouncer, travelTime, nondoHouse] = PortfolioImages;
  return (
    <section className="bg-black text-white w-[100vw] px-[6.5%]">
      <SectionHeader title={"My Portfolio"} />
      <div className="grid grid-cols-4 gap-3">
        <p className="italic text-2xl pt-6">
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
      </div>
    </section>
  );
};

export default Featured;
