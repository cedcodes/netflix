import React from 'react';
import { GlobalStyle } from './GlobalStyle';

import Background from './components/Background';
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Background />
    </div>
  );
};

export default App;
