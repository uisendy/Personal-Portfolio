import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = ({ menu, BsArrowUpRight }) => {
  return (
    <>
      <li className="flex">
        <Link
          className="links font-playFairSc uppercase text-5xl md:text-7xl flex item-centre hover:italic"
          to={menu.link}
        >
          {menu.name} <BsArrowUpRight className="arrow" />
        </Link>
      </li>
    </>
  );
};

export default MenuList;
