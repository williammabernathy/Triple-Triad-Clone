import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Components/Board/Board';
import Home from './Components/Home/Home';
import Deck from './Components/Deck/Deck';
import CardList from './Components/CardList/CardList';
import { Router, Route, Switch, useHistory } from 'react-router-dom';

const App = () => {
  const history = useHistory();

  const updateHistory = (path) => {
    history.push(path);
  };

  return (
    <div className="appContainer">

      <Router history={history}>
        <div className="navContainer">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={() => updateHistory('/')}>TT Clone</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link onClick={() => updateHistory('/play')}>Play</Nav.Link>
              <Nav.Link onClick={() => updateHistory('/deck')}>Deck Builder</Nav.Link>
              <Nav.Link onClick={() => updateHistory('/cardlist')}>Cards</Nav.Link>
            </Nav>
          </Navbar>
        </div>

        <div className="contentContainer">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/play' component={Board}></Route>
            <Route path='/deck' component={Deck}></Route>
            <Route path='/cardlist' component={CardList}></Route>
          </Switch>
        </div>

      </Router>

    </div>
  );
}

export default App;
