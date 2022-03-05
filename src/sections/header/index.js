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
            <NavDropdown as="div" title="Resumes" id="collasible-nav-dropdown">
                <Link to="/resumes/with-image"><NavDropdown.Item as="span">With Images</NavDropdown.Item></Link>
                <Link to="/resumes/without-image"><NavDropdown.Item as="span">Without Images</NavDropdown.Item></Link>
            </NavDropdown>
            </Nav>
            <Nav>
                <Link to="/resumes/">
                    <Button style={{background: '#0b090a', border: 0}} size='lg'>Get Started!</Button>{' '}
                </Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
  }
  
  export default Header;
