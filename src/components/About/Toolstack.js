import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAndroidstudio
} from "react-icons/si";
import { FaWindows, FaLinux } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    <Col xs={4} md={2} className="tech-icons">
      <SiVisualstudiocode />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <FaWindows />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <FaLinux />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiPostman />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
    <SiAndroidstudio />
    </Col>
    </Row>
  );
}

export default Toolstack;
