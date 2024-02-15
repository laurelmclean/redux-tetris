import React from 'react';
import './App.css';
import GridBoard from './components/GridBoard';
import NextBlock from'./components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import Controls from './components/Controls';
import MessagePopup from './components/MessagePopup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="header.png" alt="Candyland Tetris" height='250px' />
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <MessagePopup />
    </div>
  );
}

export default App;