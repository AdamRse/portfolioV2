import React from "react";
import { Col, Row } from "react-bootstrap";

import { FaPhp, FaReact, FaBootstrap, FaSass, FaSymfony, FaLaravel, FaGithub, FaNodeJs } from "react-icons/fa";
import { VscTerminalBash } from "react-icons/vsc";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMysql, SiApache, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoJavascript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <VscTerminalBash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandTypescript />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSass />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaSymfony />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaNodeJs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApache />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGithub />
      </Col>
    </Row>
  );
}

export default Techstack;
