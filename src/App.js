import React from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Board from './Components/Board/Board';

const App = () => {
  return (
    <div className="appContainer">

      <div className="menuWrapper">
        Menu
      </div>
      <div className="leftDeck">
        Left
      </div>
      <div className="playingTable">
        <Board />
        <Card />
      </div>
      <div className="rightDeck">
        Right
      </div>

    </div>
  );
}

export default App;
