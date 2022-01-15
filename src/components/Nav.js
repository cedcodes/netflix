import React, { useState } from 'react';
import {
  NavWrap,
  NavLogo,
  NavList,
  NavLinks,
  NavBurger,
} from '../styles/Nav.styles';
import burger from '../images/shared/icon-hamburger.svg';
import chevron from '../images/shared/icon-chevron.svg';
const Nav = () => {
  const [navOpen, setNavOpen] = useState(true);
  const handleNav = () => setNavOpen(!navOpen);

  return (
    <NavWrap>
      <NavLogo>The Planets</NavLogo>
      <NavList navOpen={navOpen}>
        <NavLinks>
          Mercury
          <img src={chevron} />
        </NavLinks>
        <NavLinks>Mercury</NavLinks>
        <NavLinks>Mercury</NavLinks>
        <NavLinks>Mercury</NavLinks>
        <NavLinks>Mercury</NavLinks>
      </NavList>
      <NavBurger navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
        <img src={burger} alt=" burger" />
      </NavBurger>
    </NavWrap>
  );
};

export default Nav;
