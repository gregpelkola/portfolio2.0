import React from 'react';
import '../style/Navigation.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className='py-0.5 mt-0'>
            <Container>
                <Navbar.Brand as={Link} to='/about' className='navbar-brand'>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link as={Link} to='/about' className='nav-link'>About</Nav.Link>
                        <Nav.Link as={Link} to='/portfolio' className='nav-link'>Portfolio</Nav.Link>
                        <Nav.Link as={Link} to='/contact' className='nav-link'>Contact</Nav.Link>
                        <Nav.Link as={Link} to='/resume' className='nav-link'>Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;