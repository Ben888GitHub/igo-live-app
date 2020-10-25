import React from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import HelpIcon from "@material-ui/icons/Help";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import Videos from "./Videos";

function HomeContent() {
  return (
    <div>
      <Image
        fluid
        style={{
          zIndex: -1,
          position: "relative",
          borderRadius: 15,
          boxShadow: "0.5px 1px 18px #888888",
        }}
        src="https://igo-events.s3.amazonaws.com/igo-live/channels/jamie/Jamie-Nonis---Channel-Banner---WFH2.jpg"
        thumbnail
      />
      <Container>
        <Row>
          <Col>
            <Image
              style={{
                width: 120,
                height: 120,
                float: "left",
                marginRight: 20,
                marginLeft: 20,
                marginTop: -40,
                borderStyle: "solid",
                borderColor: "white",
              }}
              src="https://igo-events.s3.amazonaws.com/igo-live/channels/jamie/Jamie-Nonis-Profile.png"
              roundedCircle
            />
            {/* <br /> */}
            <a
              href="https://live.igo.events/channel/21/jamie"
              style={{ color: "#504F4F" }}
            >
              <p style={{ fontSize: 25, marginTop: 7, fontWeight: "650" }}>
                Jamie Nonis
              </p>
            </a>
            <p style={{ fontSize: 15, marginTop: -15, color: "#8291B3" }}>
              Journalist & Content Strategist
            </p>
          </Col>
          <Col xs="auto" lg="3">
            <p style={{ marginTop: 25, fontSize: 18 }}>
              Follow me on:
              <a href="https://facebook.com/jamienonis">
                <FacebookIcon
                  style={{ color: "#648DAE", marginLeft: 2, fontSize: 30 }}
                />
              </a>{" "}
              <a href="https://instagram.com/jamienonis">
                <InstagramIcon
                  style={{ color: "#F27B1D", marginLeft: 1, fontSize: 30 }}
                />
              </a>
              <a href="https://twitter.com/jamienonis">
                <TwitterIcon
                  style={{ color: "#209DEA", marginLeft: 1, fontSize: 30 }}
                />
              </a>
              <a href="https://instagram.com/jamienonisphotography">
                <InstagramIcon
                  style={{ color: "#F27B1D", marginLeft: 1, fontSize: 30 }}
                />
              </a>
              <a href="https://linkedin.com/in/jamie-nonis-82a0908">
                <LinkedInIcon
                  style={{ color: "#0573AF", marginLeft: 1, fontSize: 30 }}
                />
              </a>
              <a href="mailto:jamie@jamienonis.com">
                <AlternateEmailIcon
                  style={{ color: "#648DAE", marginLeft: 1, fontSize: 30 }}
                />
              </a>
            </p>
          </Col>
        </Row>
        <br />
        <h6 style={{ marginBottom: 12, style: "#504F4F" }}>
          TAGS <HelpIcon />{" "}
        </h6>
        <Router>
          <Link to="/">
            <Button
              variant="primary"
              style={{ borderStyle: "hidden", borderRadius: 20 }}
            >
              Home{" "}
            </Button>{" "}
          </Link>
          <Link to="/videos">
            <Button
              variant="secondary"
              style={{ borderStyle: "hidden", borderRadius: 20 }}
            >
              Videos
            </Button>{" "}
          </Link>
          <br />
          <br />
          <Route exact path="/" component={Home} />
          <Route path="/videos" component={Videos} />
        </Router>
      </Container>
    </div>
  );
}

export default HomeContent;
