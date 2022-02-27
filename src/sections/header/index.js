import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

import './header.css';

function Header() {
    return (
        <Navbar collapseOnSelect style={{"paddingTop": 20, "paddingBottom": 20}} expand="lg">
        <Container>
        <Link to="/" className='logo'><Navbar.Brand>ResumeBuilder <i className="bi bi-dice-5"></i></Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Resumes" id="collasible-nav-dropdown">
                <NavDropdown.Item><Link to="/collection">With Images</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/collection">Without Images</Link></NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
                <Button style={{background: '#0b090a', border: 0}} size='lg'>Get Started!</Button>{' '}
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
  }
  
  export default Header;
