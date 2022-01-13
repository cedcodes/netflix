import React from 'react';
import planet from '../../data/data.json';

import { NavWrapper, NavLogo, NavList, NavLink, NavBurger } from './Nav.styles';

import open from '../../images/icon-hamburger.svg';
import chevron from '../../images/icon-chevron.svg';

const Nav = ({ planets }) => {
  return (
    <NavWrapper>
      <NavLogo>The Planets</NavLogo>
      <NavList>
        <NavLink>
          Mercury
          <img src={chevron} alt="chevron" />
        </NavLink>
        <NavLink>Venus</NavLink>
        <NavLink>Earth</NavLink>
        <NavLink>Mars</NavLink>
        <NavLink>Jupiter</NavLink>
        <NavLink>Saturn</NavLink>
        <NavLink>Uranus</NavLink>
        <NavLink>Neptune</NavLink>
      </NavList>
      <NavBurger>
        <img src={open} alt="hamburger" />
      </NavBurger>
    </NavWrapper>
  );
};

export default Nav;
