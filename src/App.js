import React, { useEffect, useState } from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Board from './Components/Board/Board';
import Home from './Components/Home/Home';
import Deck from './Components/Deck/Deck';
import CardList from './Components/CardList/CardList';
import { Router, Route, Switch, useHistory } from 'react-router-dom';

const App = () => {
  const [cardData, setCardData] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const fetchCards = () => {
    setLoading(true);
    fetch(`https://triad.raelys.com/api/cards`)
    .then(response => response.json())
    .then(results => {
      setCardData({ results })
      setLoading(false);
      console.log(cardData);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })
  }

  const updateHistory = (path) => {
    history.push(path);
  };

  useEffect(() => {
    fetchCards();
    console.log('useEffect called');
  }, []);

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

        {loading ? (
          <div>Loading</div>) : (
        <div className="contentContainer">
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route path='/play' component={Board}></Route>
            <Route path='/deck' component={Deck}></Route>
            <Route path='/cardlist' component={CardList}></Route>
          </Switch>
        </div>
        )}

      </Router>

    </div>
  );
}

export default App;
