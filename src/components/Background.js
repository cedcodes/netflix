import React, { useState, useEffect } from 'react';
import { Bg } from '../styles/Background.styles';
import data from '../data/data.json';

import Nav from './Nav';
import { Planets } from './Planets';
import Footer from './Footer';

const Background = () => {
  const [currentPlanet, setCurrentPlanet] = useState(data[0]);
  const [bodyClass, setBodyClass] = React.useState(data[0].name.toLowerCase());

  const [resetTab, setResetTab] = useState(0);
  const handleChangePlanet = (index, name) => {
    setCurrentPlanet(data[index]);
    setBodyClass(name.toLowerCase());
  };
  useEffect(() => {
    function handleBodyClass() {
      document.body.removeAttribute('class');
      document.body.classList.toggle(bodyClass);
    }
    handleBodyClass();
  }, [bodyClass]);

  useEffect(() => {
    setResetTab(0);
  }, [currentPlanet]);

  return (
    <>
      <Bg>
        <Nav planets={data} handleChangePlanet={handleChangePlanet} />
        <Planets currentPlanet={currentPlanet} resetTab={resetTab} />
        <Footer currentPlanet={currentPlanet} />
      </Bg>
    </>
  );
};

export default Background;
