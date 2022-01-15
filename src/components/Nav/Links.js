import React, { useState } from 'react';
import styled from 'styled-components';
import chevron from '../../images/icon-chevron.svg';
import planets from '../../data/data.json';

const NavLogo = styled.h1`
  text-transform: uppercase;
  font-size: 2.8rem;
  font-weight: 500;
`;
const NavList = styled.nav`
  position: fixed;
  background: var(--bgColor);
  top: 8rem;
  padding: 2rem 4rem;
  left: 0;
  right: 0;
  height: 100%;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  @media (min-width: 768px) {
    position: static;
    transform: translateX(0);
    display: flex;
    align-items: center;
    padding: 2rem 0 1rem;
  }
`;
const NavLink = styled.span`
  color: hsla(0, 0%, 100%, 70%);
  cursor: pointer;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 2rem 1rem 2rem 5rem;
  display: block;
  border-bottom: 1px solid;
  border-color: hsla(0, 0%, 100%, 10%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.4s ease;
  img {
    width: 1.5rem;
    opacity: 0.4;
  }

  &:before {
    content: '';
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: white;
    position: absolute;
    left: 5.5rem;
  }
  &.mercury {
    &::before {
      background-color: var(--mercury);
    }
  }

  &.venus {
    &::before {
      background-color: var(--venus);
    }
  }

  &.earth {
    &::before {
      background-color: var(--earth);
    }
  }

  &.mars {
    &::before {
      background-color: var(--mars);
    }
  }

  &.jupiter {
    &::before {
      background-color: var(--jupiter);
    }
  }

  &.saturn {
    &::before {
      background-color: var(--saturn);
    }
  }

  &.uranus {
    &::before {
      background-color: var(--uranus);
    }
  }

  &.neptune {
    &::before {
      background-color: var(--neptune);
    }
  }

  &:hover,
  &.active {
    color: hsla(0, 0%, 100%, 100%);
    border-color: hsla(0, 0%, 100%, 100%);
    img {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    display: block;
    position: relative;
    margin: 0 2rem;
    padding: 2rem 0rem 1rem;
    border-bottom: 0;
    font-size: 1.1rem;

    &:hover,
    &.active {
      color: hsla(0, 0%, 100%, 100%);

      &::before {
        width: 100%;
      }
    }

    &::before {
      bottom: -10px;
      left: 50%;
      height: 4px;
      width: 0;
      transform: translateX(-50%);
      transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      background: white;
      border-radius: 0;
    }
    img {
      display: none;
    }
  }
  @media (min-width: 1100px) {
    &::before {
      top: -19px;
      left: 50%;
      height: 4px;
      width: 0;
      transform: translateX(-50%);
      transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      background: white;
      border-radius: 0;
    }
  }
`;

const Links = ({ handleChangePlanet, open }) => {
  const [activePlanet, setActivePlanet] = useState('mercury', 'venus');

  function handleNewPlanet(index, planetName) {
    handleChangePlanet(index, planetName);
    setActivePlanet(planetName.toLowerCase());
  }

  return (
    <>
      <NavLogo>The Planets</NavLogo>

      <NavList open={open}>
        {planets.map((planet, index) => {
          let name = planet.name.toLocaleLowerCase();
          return (
            <NavLink key={index} className={name}>
              {name}
              <img src={chevron} alt="chevron" />
            </NavLink>
          );
        })}

        {/* <NavLink className=></NavLink> */}

        {/* <NavLink className="mercury">
          Mercury
          <img src={chevron} alt="chevron" />
        </NavLink> */}
        {/* <NavLink>Venus</NavLink>
        <NavLink>Earth</NavLink>
        <NavLink>Mars</NavLink>
        <NavLink>Jupiter</NavLink>
        <NavLink>Saturn</NavLink>
        <NavLink>Uranus</NavLink>
        <NavLink>Neptune</NavLink> */}
      </NavList>
    </>
  );
};

export default Links;
