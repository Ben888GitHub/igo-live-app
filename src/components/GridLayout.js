import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeContent from "./HomeContent";
import SideContent from "./SideContent";

function GridLayout() {
  return (
    <Container fluid>
      <Row>
        <Col
          style={{ borderStyle: "hidden", marginLeft: 15, borderRadius: 10 }}
        >
          <HomeContent />
          <br />
        </Col>

        <Col
          xs="auto"
          lg="3"
          style={{
            borderStyle: "hidden",
            marginLeft: 15,
            marginRight: 15,
            borderRadius: 10,
          }}
        >
          <SideContent />
        </Col>
      </Row>
    </Container>
  );
}

export default GridLayout;
