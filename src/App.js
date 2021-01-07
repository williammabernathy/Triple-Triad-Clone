import React from 'react';
import './App.css';

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
        <div className="gameboardWrapper">
          Board
        </div>
      </div>
      <div className="rightDeck">
        Right
      </div>

    </div>
  );
}

export default App;
