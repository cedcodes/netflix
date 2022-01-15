import React, { useState } from 'react';
import styled from 'styled-components';
import menuBurger from '../../images/icon-hamburger.svg';
import Links from './Links';

const Wrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  @media (min-width: 768px) {
    flex-direction: column;
    padding: 2rem 4rem 0;
    border-bottom: 1px solid hsla(0, 0%, 100%, 10%);
  }
  @media (min-width: 1100px) {
    flex-direction: row;
    margin: 0;
    padding: 0 5rem;
    border-bottom: 1px solid hsla(0, 0%, 100%, 10%);
  }
`;
const Burger = styled.div`
  img {
    position: relative;
    opacity: ${({ open }) => (open ? 0.5 : 1)};
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavWrap = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrap>
      <Links open={open} />
      <Burger open={open} onClick={() => setOpen(!open)}>
        <img src={menuBurger} />
      </Burger>
    </Wrap>
  );
};

export default NavWrap;
