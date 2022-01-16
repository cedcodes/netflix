import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@react-hook/media-query';

import { tabs } from '../data/tabs';
import linkIcon from '../shared/icon-source.svg';
import {
  PlanetsWrap,
  PlanetsImageWrap,
  PlanetsInfo,
  PlanetsInfoWrap,
  PlanetsLink,
  PlanetsTab,
  PlanetsButton,
} from '../styles/Planets.styles';

export const Planets = ({ currentPlanet, resetTab }) => {
  const mobile = useMediaQuery('(min-width: 768px)');

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
        {currentTab === 'geology' ? (
          <>
            <img src={currentPlanet.images.overview} alt={currentPlanet.name} />
            <img
              className="geology"
              src={currentPlanet.images[currentTab]}
              alt="geology"
            />
          </>
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
            Source: &nbsp;
            <a href={currentPlanet[currentTab].source} target="_blank">
              Wikipedia
            </a>
            <img src={linkIcon} alt="wikipedia" />
          </PlanetsLink>
        </PlanetsInfoWrap>
        <PlanetsTab>
          {tabs.map((tab, index) => {
            let data = tab.data;

            return (
              <button
                key={index}
                id={tab.id}
                onClick={() => onClickTabItem(index, data)}
                className={`${data} ${
                  isActiveTab === index ? 'active' : 'inactive'
                }`}
              >
                {/* {tab.text} */}
                {mobile ? tab.text : tab.mobile}
              </button>
            );
          })}
        </PlanetsTab>
      </PlanetsInfo>
    </PlanetsWrap>
  );
};
