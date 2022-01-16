import React from 'react';

const Planets = ({ currentPlanet }) => {
  return (
    <div>
      <img src={currentPlanet.images.overview} />

      <img src={currentPlanet.images.structure} />
    </div>
  );
};

export default Planets;
