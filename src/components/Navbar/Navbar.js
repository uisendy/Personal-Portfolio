import React from 'react';
import Menu from './Menu';

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <section>
      <Menu
        menu1="About"
        menu2="Works"
        menu3="Skills &amp; Experience"
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </section>
  );
};

export default Navbar;
