import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import staticlogo from "../staticlogo.png";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href={"https://live.igo.events"}>
        <img
          src={staticlogo}
          logo="Logo"
          style={{
            height: "80px",
          }}
          scale="0"
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href={"https://live.igo.events/"}
            style={{ fontWeight: "600", fontSize: 18 }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href={"https://igo.events/what-is-igo"}
            style={{ fontWeight: "600", fontSize: 18 }}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            href={"https://igo.events/contact"}
            style={{ fontWeight: "600", fontSize: 18 }}
          >
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
