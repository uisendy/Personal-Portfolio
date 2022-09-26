import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import MenuList from './MenuList';
import { BsArrowUpRight } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import LogoWhiteFrameless from '../../Assets/Logo/LogoWhiteFrameless.png';

const Menu = ({ menuList, isNavOpen, setIsNavOpen }) => {
  return (
    <div className="py-5 px-8 bg-black">
      <nav className="flex items-center justify-between pr-5">
        <div
          onClick={() => setIsNavOpen((open) => !open)}
          className={
            isNavOpen
              ? 'hamburger-menu is-active fixed'
              : 'hamburger-menu space-y-2 fixed'
          }
        >
          <div className="menu-icon"></div>
        </div>
        <div className="">
          <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
            {' '}
            <div className="nav-menu flex justify-center flex-col gap-10 w-[80%] mx-[auto]">
              <ul className="flex flex-col gap-10 md:gap-16 justify-between min-h-[250px] w-[80%] text-white text-6xl md:w-[80%] md:text-[6rem]">
                {menuList.map((menu) => (
                  <MenuList
                    menu={menu}
                    key={menu.id}
                    BsArrowUpRight={BsArrowUpRight}
                    isNavOpen={isNavOpen}
                    setIsNavOpen={setIsNavOpen}
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
          <Link className="text-white text-2xl md:text-4xl" to={'/'}>
            <img
              className="w-[50px] h-[50px]"
              src={LogoWhiteFrameless}
              alt="Logo"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
