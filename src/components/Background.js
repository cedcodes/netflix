import React, { useState } from 'react';
import { Bg } from '../styles/Background.styles';
import data from '../data/data.json';

import Nav from './Nav';
import Planets from './Planets';

const Background = () => {
  const [currentPlanet, setCurrentPlanet] = useState(data[0]);

  const handleChangePlanet = (idx) => {
    setCurrentPlanet(data[idx]);
  };

  return (
    <Bg>
      <Nav planets={data} handleChangePlanet={handleChangePlanet} />
      <Planets />
    </Bg>
  );
};

export default Background;
