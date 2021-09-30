import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink className="brand-logo" to="/home"> <Navbar.Brand>MeadDb</Navbar.Brand></NavLink>
                    <Nav className="me-auto">
                        <NavLink to="/home" activeStyle={activeStyle} className="menu-item">Home</NavLink>
                        <NavLink to="/about" activeStyle={activeStyle} className="menu-item">About</NavLink>
                        <NavLink to="/restaurant" activeStyle={activeStyle} className="menu-item">Restaurant</NavLink>
                        <NavLink to="/contact" activeStyle={activeStyle} className="menu-item">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;