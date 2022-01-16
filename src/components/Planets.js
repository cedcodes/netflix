import React, { useState, useEffect } from 'react';

import { tabs } from '../data/tabs';
import linkIcon from '../shared/icon-source.svg';
import {
  PlanetsWrap,
  PlanetsImageWrap,
  PlanetsInfo,
  PlanetsInfoWrap,
  PlanetsLink,
  PlanetsTab,
} from '../styles/Planets.styles';

export const Planets = ({ currentPlanet, resetTab }) => {
  const [isActiveTab, setIsActiveTab] = useState(resetTab);
  const [currentTab, setCurrentTab] = useState(tabs[0].data);

  useEffect(() => {
    function handleResetTab() {
      if (isActiveTab !== resetTab) {
        setIsActiveTab(0);
        setCurrentTab(tabs[0].data);
      }
    }
    handleResetTab();
  }, [currentPlanet]);

  function onClickTabItem(index, tab) {
    setIsActiveTab(index);
    setCurrentTab(tab);
  }

  return (
    <PlanetsWrap>
      <PlanetsImageWrap>
        {currentTab === 'overview' ? (
          <img src={currentPlanet.images.overview} alt={currentPlanet.name} />
        ) : (
          <img
            src={currentPlanet.images[currentTab]}
            alt={currentPlanet.name}
          />
        )}
      </PlanetsImageWrap>

      <PlanetsInfo>
        <PlanetsInfoWrap>
          <h1>{currentPlanet.name}</h1>
          <p>{currentPlanet[currentTab].content}</p>
          <PlanetsLink>
            <a href={currentPlanet[currentTab].source} target="_blank">
              Wikipedia
            </a>
            <img src={linkIcon} alt="wikipedia" />
          </PlanetsLink>
        </PlanetsInfoWrap>
        <PlanetsTab>
          {tabs.map((tab, index) => {
            let data = tab.data;
            console.log(tab.data);
            return (
              <button key={index} onClick={() => onClickTabItem(index, data)}>
                {tab.text}
              </button>
            );
          })}
        </PlanetsTab>
      </PlanetsInfo>
    </PlanetsWrap>
  );
};
