import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <NavLink to="/" className="nav-link brand-text">
          Redux
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link ms-2">
              About
            </NavLink>
            <NavLink to="/services" className="nav-link ms-2">
              Services
            </NavLink>
            <NavLink to="/pages" className="nav-link ms-2">
              Pages
            </NavLink>
            <NavLink to="/contact" className="nav-link ms-2">
              Contact
            </NavLink>
          </Nav>
          <NavLink to="/view" className="nav-link ms-2">
            View
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
