import React, { useState, useEffect } from 'react';
import { Bg } from '../styles/Background.styles';
import data from '../data/data.json';

import Nav from './Nav';
import Planets from './Planets';
import Footer from './Footer';

const Background = () => {
  const [currentPlanet, setCurrentPlanet] = useState(data[0]);

  const [resetTab, setResetTab] = useState(0);
  const handleChangePlanet = (idx) => {
    setCurrentPlanet(data[idx]);
  };
  useEffect(() => {
    setResetTab(0);
  }, [currentPlanet]);

  return (
    <Bg>
      <Nav planets={data} handleChangePlanet={handleChangePlanet} />
      <Planets currentPlanet={currentPlanet} />
      <Footer currentPlanet={currentPlanet} />
    </Bg>
  );
};

export default Background;
