import React from 'react';
import GridBoard from './components/GridBoard';
import NextBlock from'./components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';
import MessagePopup from './components/MessagePopup';

function App() {
  return (
    <div className="App">
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <MessagePopup />
    </div>
  );
}

export default App;