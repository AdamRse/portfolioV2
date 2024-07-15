import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Une petite <span className="purple"> PRESENTATION </span>
            </h1>
            <p className="home-about-body">
              Je code depuis 2012, pour des projets perso, et parfois professionels en tant que freelance.
              J'ai beaucoup codé from scratch et j'essaye toujours de savoir comment fonctionnent les choses !
              <br />
              <br />J'ai beaucoup utilisé
              <i>
                <b className="purple"> PHP, Javascript, HTML/CSS et MySQL </b>
              </i>
              <br />
              <br />
              J'aime découvrir de nouvelles façons de nouvelles façons de&nbsp;
              <i>
                <b className="purple">Programmer </b>, que ce soit sur <b className="purple">mon serveur web</b> ou sur d'autres architectures comme sur mon{" "}
                <b className="purple">Raspberry Pi</b>
              </i>
              <br />
              <br />
              Ma soif de conaissances m'amène également à consommer quotidiennempent de la vulgarisation <b className="purple">vulgarisation scientifique</b> sur de nombreux domaines variés,
              comme <b className="purple">l'astronomie, la psycho-socio, ou la philosohie</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Retrouvez-moi sur</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AdamRse"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adam-rousselle-a17653245/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
