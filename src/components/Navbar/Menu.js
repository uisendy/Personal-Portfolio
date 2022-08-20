import React from "react";
import { useState } from "react";
import "./style.css";
import { BsArrowRight } from "react-icons/bs";

const Menu = ({ menu1, menu2, menu3 }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="py-8 px-8 bg-black fixed w-[100vw]">
      <nav className="flex justify-between">
        <section className="flex">
          <div
            onClick={() => setIsNavOpen((open) => !open)}
            className={
              isNavOpen
                ? "hamburger-menu is-active"
                : "hamburger-menu space-y-2"
            }
          >
            {/* <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span> */}
            <div className="menu-icon"></div>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            {" "}
            <div
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            ></div>
            <ul className="flex flex-col gap-12 justify-between min-h-[250px] w-[80%] text-white text-7xl md:w-[80%] md:text-[7rem]">
              <li className="flex">
                <a
                  className="links flex item-centre hover:italic"
                  href="/about"
                >
                  {menu1} <BsArrowRight className="arrow" />
                </a>
              </li>
              <li className="flex">
                <a
                  className="links flex item-centre hover:italic"
                  href="/portfolio"
                >
                  {menu2} <BsArrowRight className="arrow" />
                </a>
              </li>
              <li className="flex">
                <a
                  className="links flex item-centre hover:italic"
                  href="/contact"
                >
                  {menu3} <BsArrowRight className="arrow" />
                </a>
              </li>
            </ul>
          </div>
        </section>
        <div className="">
          <a
            className="z-[40] relative text-white text-2xl md:text-4xl"
            href="/contact"
          >
            S<span className="italic">i:</span>{" "}
          </a>
        </div>
        <div className="contact hidden items-center gap-2 z-[40] text-white font-playFairSc text-xl md:flex md:text-3xl md:pr-10 md:relative">
          <a className="" href="/contact">
            CONTACT
          </a>
          <BsArrowRight className="" />
        </div>
      </nav>
    </div>
  );
};

export default Menu;
