import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar collapseOnSelect style={{"paddingTop": 20, "paddingBottom": 20}} expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to="/"><Navbar.Brand>ResumeBuilder</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavDropdown title="Templates" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
                <Button variant="primary">Get Started!</Button>{' '}
            </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
  }
  
  export default Header;
