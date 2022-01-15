import React from 'react';

import { FooterWrap, FooterItem } from '../styles/Footer.styles';

const Footer = ({ currentPlanet }) => {
  return (
    <FooterWrap>
      <FooterItem>
        <p>Rotation Time</p>
        <h2>{currentPlanet.rotation}</h2>
      </FooterItem>
      <FooterItem>
        <p>Revolution Time</p>
        <h2>{currentPlanet.revolution}</h2>
      </FooterItem>
      <FooterItem>
        <p>Radius</p>
        <h2>{currentPlanet.radius}</h2>
      </FooterItem>
      <FooterItem>
        <p>Average Temp</p>
        <h2>{currentPlanet.temperature}</h2>
      </FooterItem>
    </FooterWrap>
  );
};

export default Footer;
