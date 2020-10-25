import React from "react";
import { Navbar, Nav, NavDropdown, Jumbotron } from "react-bootstrap";
import staticlogo from "../staticlogo.png";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
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
      {/* </Navbar.Brand> */}
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            // style={{ color: "#0F276B", fontWeight: "500" }}
            href={"https://live.igo.events/"}
            style={{ fontWeight: "600", fontSize: 18 }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            // style={{ color: "#0F276B", fontWeight: "500" }}
            href={"https://igo.events/what-is-igo"}
            style={{ fontWeight: "600", fontSize: 18 }}
          >
            About Us
          </Nav.Link>
          <Nav.Link
            // style={{ color: "#0F276B", fontWeight: "500" }}
            href={"https://igo.events/contact"}
            style={{ fontWeight: "600", fontSize: 18 }}
          >
            Contact Us
          </Nav.Link>
          {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
