import React from 'react';
import Menu from './Menu';

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  const menuList = ['About', 'Works', 'Skills & Experience'];
  return (
    <section>
      <Menu
        menuList={menuList}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </section>
  );
};

export default Navbar;
