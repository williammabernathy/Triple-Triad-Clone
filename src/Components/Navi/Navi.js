import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';

const Navi = () => {
    return (
        <div className="navContainer">
            <Router>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">TT Clone</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/Play">Play</Nav.Link>
                        <Nav.Link href="/Deck">Deck</Nav.Link>
                        <Nav.Link href="/Cards">Cards</Nav.Link>
                    </Nav>
                </Navbar>
            </Router>
        </div>
    );
}

export default Navi;