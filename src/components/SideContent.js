import React from "react";
import {
  Jumbotron,
  Container,
  Image,
  Row,
  Col,
  Carousel,
  Button,
  Card,
  CardDeck,
  //   Dropdown,
  //   DropdownButton,
} from "react-bootstrap";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function SideContent() {
  return (
    <div>
      <p style={{ fontSize: 25 }}>Social media</p>
      <Card
        style={{
          borderStyle: "hidden",
          boxShadow: "0.5px 1px 7px #888888",
          borderRadius: 10,
        }}
      >
        <Card.Body>
          <a href="https://www.facebook.com/iGo.Asia/">
            <FacebookIcon
              style={{ marginRight: 10, fontSize: 40, color: "#648DAE" }}
            />
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.instagram.com/igo.events/"
          >
            iGo Live Facebook
          </a>
        </Card.Body>
      </Card>
      {/* <br /> */}
      <Card
        style={{
          marginTop: 20,
          borderStyle: "hidden",
          boxShadow: "0.5px 1px 7px #888888",
          borderRadius: 10,
        }}
      >
        <Card.Body>
          <a href="https://www.instagram.com/igo.events/">
            <InstagramIcon
              style={{ marginRight: 10, fontSize: 40, color: "#F27B1D" }}
            />
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.instagram.com/igo.events/"
          >
            iGo Live Instagram
          </a>
        </Card.Body>
      </Card>
      <br />
      <br />
      <Card
        style={{
          // marginTop: 20,
          borderStyle: "hidden",
          boxShadow: "0.5px 1px 7px #888888",
          borderRadius: 10,
        }}
      >
        <Card.Header
          style={{
            backgroundColor: "#31393D",
            color: "white",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          as="h5"
        >
          Support
        </Card.Header>
        <Card.Body>
          <a href="https://igo.events/what-is-igo" style={{ color: "black" }}>
            <Card.Title>What is iGo</Card.Title>
          </a>
          <a href="https://igo.events/contact" style={{ color: "black" }}>
            <Card.Title>Contact</Card.Title>
          </a>
          <a
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto"
            style={{ color: "black" }}
          >
            <Card.Title>Sales Enquiries</Card.Title>
          </a>

          {/* <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <br />
      <br />
      <Card
        style={{
          // marginTop: 20,
          borderStyle: "hidden",
          boxShadow: "0.5px 1px 7px #888888",
          borderRadius: 10,
        }}
      >
        <Card.Header
          style={{
            backgroundColor: "#31393D",
            color: "white",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          as="h5"
        >
          Channel Categories
        </Card.Header>
        <Card.Body>
          <a
            href="https://live.igo.events/channel/21/jamie"
            style={{ color: "black" }}
          >
            <Card.Title>Coming Soon</Card.Title>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SideContent;

// style={{ fontWeight: "400" }}
// style={{ fontWeight: "400" }}
// style={{ fontWeight: "400" }}
// style={{ fontWeight: "400" }}
