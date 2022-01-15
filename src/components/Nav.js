import React, { useState } from 'react';
import {
  NavWrap,
  NavLogo,
  NavList,
  NavLink,
  NavBurger,
} from '../styles/Nav.styles';
import burger from '../images/shared/icon-hamburger.svg';
import chevron from '../images/shared/icon-chevron.svg';
const Nav = ({ planets, handleChangePlanet }) => {
  const [activePlanet, setActivePlanet] = React.useState('mercury');

  const [navOpen, setNavOpen] = useState(true);
  const handleNav = () => setNavOpen(!navOpen);

  const handleNewPlanet = (index, planetName) => {
    handleChangePlanet(index, planetName);
    setActivePlanet(planetName.toLowerCase());
  };
  return (
    <NavWrap>
      <NavLogo>The Planets</NavLogo>
      <NavList navOpen={navOpen}>
        {planets.map((planet, index) => {
          let name = planet.name.toLowerCase();
          return (
            <NavLink
              key={index}
              className={`${name}
              ${activePlanet === name.toLowerCase() ? 'active' : 'inactive'}
              `}
              onClick={() => handleNewPlanet(index, name)}
            >
              {name}
              <img src={chevron} alt="" />{' '}
            </NavLink>
          );
        })}
      </NavList>
      <NavBurger navOpen={navOpen} onClick={() => setNavOpen(!navOpen)}>
        <img src={burger} alt=" burger" />
      </NavBurger>
    </NavWrap>
  );
};

export default Nav;
