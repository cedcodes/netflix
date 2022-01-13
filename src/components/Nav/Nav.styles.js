import styled from 'styled-components';

export const NavWrapper = styled.header`
  /* background: blue; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7rem;
  border-bottom: 1px solid hsla(0, 0%, 100%, 20%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 4rem;
  @media (max-width: 1000px) {
    display: block;
    position: static;
    text-align: center;
    height: auto;
    padding: 4rem 0 2rem;
  }

  @media (max-width: 768px) {
    display: flex;
    padding: 2rem 4rem;
  }
`;

export const NavLogo = styled.h1`
  text-transform: uppercase;
  font-size: 2.8rem;
  font-weight: 500;
`;

export const NavList = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    padding-top: 6rem;
    justify-self: center;
    align-self: center;
    width: 100%;
    margin: 0 auto;
  }
  @media (max-width: 768px) {
    display: block;
    background: var(--bgColor);
    padding: 3rem 4rem;
    position: fixed;
    top: 8rem;
    left: 0;
    right: 0;
    height: 100%;
    /* z-index: 100; */
    overflow: auto;
  }
`;

export const NavLink = styled.span`
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 2rem;
  z-index: 1000;
  img {
    display: none;
    width: 1rem;
  }
  &:hover {
    color: red;
  }
  @media (max-width: 1000px) {
    padding: 1.6rem;
    padding: 1.8rem;
  }
  @media (max-width: 768px) {
    img {
      display: block;
    }
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 2rem 0;
    padding-left: 5rem;
    /* padding-left: 2rem; */
    flex: 1;
    &:not(:last-child) {
      border-bottom: 1px solid hsla(0, 0%, 100%, 10%);
    }
    &::before {
      content: '';
      position: absolute;
      width: 2.8rem;
      height: 2.8rem;
      border-radius: 50%;
      background: white;
      left: 3em;
    }
  }
`;

export const NavBurger = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
  }
`;
