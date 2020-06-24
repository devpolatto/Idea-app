import React from 'react';

import { GlobalStyle } from './styles/Global'

import NewIdea from './pages/NewIdea';

function App() {
  return (
    <div>
      <NewIdea/>
      <GlobalStyle whiteColor/>
    </div>
  );
}

export default App;
