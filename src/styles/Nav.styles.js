import styled from 'styled-components';

export const NavWrap = styled.header`
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.8rem;
  text-transform: uppercase;
  border-bottom: 1px solid hsla(0, 0%, 100%, 10%);
  @media (min-width: 768px) {
    display: block;
    position: static;
    padding: 0 3rem;
    height: auto;
    text-align: center;
  }

  @media (min-width: 1100px) {
    /* position: fixed; */
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    height: 7rem;
  }
`;

export const NavLogo = styled.h1`
  font-size: 2.8rem;
  padding-left: 2.5rem;
  @media (min-width: 768px) {
    margin-top: 2rem;
    width: 100%;
  }
  @media (min-width: 1100px) {
    margin-top: 0;
  } ;
`;
export const NavList = styled.div`
  position: absolute;
  top: 6.8rem;
  transform: ${({ navOpen }) =>
    navOpen ? 'translateX(100%)' : 'translateX(0)'};
  transition: 0.5s;
  background: var(--bgColor);
  width: 100%;
  padding: 3rem 2.5rem;
  @media (min-width: 768px) {
    position: static;
    padding-bottom: 0;
    height: auto;
    transform: translateX(0);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1100px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
  }
`;
export const NavLinks = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 2px;
  display: block;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid hsla(0, 0%, 100%, 10%);
  padding: 1rem 0 1rem 4rem;
  img {
    width: 1.5rem;
  }

  &:before {
    content: '';
    position: absolute;
    left: 2.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: var(--white);
  }
  @media (min-width: 768px) {
    position: relative;
    display: block;
    margin: 0;
    padding: 2.35rem 0;
    color: hsla(0, 0%, 100%, 75%);
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    border: 0;
    img {
      display: none;
    }

    &:not(:first-child) {
      border-top: 0;
    }

    &:not(:first-child) {
      margin-left: 33px;
    }

    &::before {
      bottom: 0;
      left: 50%;
      height: 4px;
      width: 0;
      transform: translateX(-50%);
      transition: width 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      background: white;
      border-radius: 0;
    }

    &:hover,
    &.active {
      color: hsla(0, 0%, 100%, 100%);

      &::before {
        width: 100%;
      }
    }
  }

  @media (min-width: 1100px) {
    padding: 2.14rem 0;

    &::before {
      top: -0.65rem;
    }
  }
`;
export const NavBurger = styled.div`
  padding-right: 2.5rem;
  opacity: ${({ navOpen }) => (navOpen ? '1' : '.5')};
  @media (min-width: 768px) {
    display: none;
  }
`;
