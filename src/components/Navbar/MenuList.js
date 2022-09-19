import React from 'react';

const MenuList = ({ menu, FiArrowUpRight }) => {
  return (
    <>
      <li className="flex">
        <a
          className="links font-playFairSc uppercase text-5xl md:text-7xl flex item-centre hover:italic"
          href="/about"
        >
          {menu} <FiArrowUpRight className="arrow" />
        </a>
      </li>
    </>
  );
};

export default MenuList;