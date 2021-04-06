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
                        <Nav.Link href="/play">Play</Nav.Link>
                        <Nav.Link href="/deck">Deck Builder</Nav.Link>
                        <Nav.Link href="/cardlist">Cards</Nav.Link>
                    </Nav>
                </Navbar>
            </Router>
        </div>
    );
}

export default Navi;