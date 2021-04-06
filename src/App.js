import React from 'react';
import './App.css';
import Nav from './Components/Navi/Navi';
import Board from './Components/Board/Board';
import Home from './Components/Home/Home';
import Deck from './Components/Deck/Deck';
import CardList from './Components/CardList/CardList';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="appContainer">
      <Router>
        
        <div>
          <Nav />
        </div>

        <div className="contentContainer">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/play' component={Board}></Route>
            <Route exact path='/deck' component={Deck}></Route>
            <Route exact path='/cardlist' component={CardList}></Route>
          </Switch>
        </div>

      </Router>
    </div>
  );
}

export default App;
