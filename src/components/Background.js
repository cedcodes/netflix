import React from 'react';
import styled, { keyframes } from 'styled-components';
import stars from '../images/shared/background-stars.svg';

import Nav from './Nav';
import Planets from './Planets';
const BgAnimation = keyframes`
0%{
  transform:translate3d(0,0,0)
}
100% {
  transform:translate3d(0,-1200px,0);
}`;
const Bg = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;
  &::before {
    content: '';
    background: url(${stars});
    position: absolute;
    top: -30%;
    left: -50%;
    width: 200%;
    height: 380rem;
    background-repeat: repeat;
    animation: ${BgAnimation} 30s linear infinite;
  }
`;

const Background = () => {
  return (
    <Bg>
      <Nav />
      <Planets />
    </Bg>
  );
};

export default Background;
