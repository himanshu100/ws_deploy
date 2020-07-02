import React, { Component } from "react";
//import { Link } from "react-router-dom";
//import { ButtonContainer } from "./Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../App.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" fixed="top" variant="dark">
        <Navbar.Brand href="/">
          <Image src="./images/logo.png" thumbnail />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">About Us</Nav.Link>

            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Mango</NavDropdown.Item>
              <NavDropdown.Item href="/">Litchi</NavDropdown.Item>
              <NavDropdown.Item href="/">Strawberry</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Button
              variant="secondary"
              className="cart_Button"
              size="lg"
              active
            >
              <span className="mr-2">
                <i className="fas fa-shopping-cart"></i>
              </span>
              my cart
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
