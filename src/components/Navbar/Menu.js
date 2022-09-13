import React from 'react';
import './style.css';
import MenuList from './MenuList';
import { FiArrowUpRight } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import LogoWhiteFrameless from '../../Assets/Logo/LogoWhiteFrameless.png';

const Menu = ({ menuList, isNavOpen, setIsNavOpen }) => {
  return (
    <div className="py-8 px-8 bg-black w-[100vw]">
      <nav className="flex justify-between items-center">
        <div className="">
          <div
            onClick={() => setIsNavOpen((open) => !open)}
            className={
              isNavOpen
                ? 'hamburger-menu is-active'
                : 'hamburger-menu space-y-2'
            }
          >
            <div className="menu-icon"></div>
          </div>

          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            {' '}
            <div
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            ></div>
            <div className="nav-menu flex justify-center flex-col gap-10 w-[80%] mx-[auto]">
              <ul className="flex flex-col gap-10 md:gap-16 justify-between min-h-[250px] w-[80%] text-white text-6xl md:w-[80%] md:text-[6rem]">
                {menuList.map((menu) => (
                  <MenuList
                    menu={menu}
                    key={menu}
                    FiArrowUpRight={FiArrowUpRight}
                  />
                ))}
              </ul>
              <div className="nav-menu-line h-[1px] bg-slate-400 "></div>
              <div className="nav-menu-socials flex gap-4">
                <a
                  className="transition hover:opacity-75 hover:line-through"
                  href="http://github.com/uisendy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-2xl text-white" />
                </a>
                <a
                  className="transition hover:opacity-75 hover:line-through"
                  href="https://www.linkedin.com/in/inieke-sendy-129b57ab/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="text-2xl text-white" />
                </a>
                <a
                  className="transition hover:opacity-75 hover:line-through"
                  href="https://twitter.com/SInieke/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="text-2xl text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <a
            className="z-[40] relative text-white text-2xl md:text-4xl"
            href="/contact"
          >
            <img
              className="w-[70px] h-[70px]"
              src={LogoWhiteFrameless}
              alt="Logo"
            />
          </a>
        </div>
        <div className="contact hidden items-center gap-2 z-[40] text-white font-playFairSc text-xl md:flex md:text-3xl md:pr-10 md:relative">
          <a className="" href="/contact">
            CONTACT
          </a>
          <FiArrowUpRight className="" />
        </div>
      </nav>
    </div>
  );
};

export default Menu;
