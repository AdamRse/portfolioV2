import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const calculateAge = () => {
    const birthDate = new Date('1990-05-03');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A propos de moi <span className="purple"></span>
            </h1>
            <p className="home-about-body">
              J'ai {calculateAge()} ans, actuellement en formation de concepteur d'applications web au garage404 à <span className="purple">ROANNE (42)</span>.
              <br />
              Je code depuis 2012, pour des projets perso, et professionnels en tant que freelance.
              J'ai beaucoup codé from scratch et j'essaye toujours de savoir comment fonctionnent les choses !
              <br />
              <br />J'ai beaucoup utilisé
              <i>
                <b className="purple"> PHP, Javascript, HTML/CSS et MySQL </b>
              </i>
              <br />
              <br />
              J'aime découvrir de nouvelles façons de&nbsp;
              <i>
                <b className="purple">Programmer </b>, que ce soit sur <b className="purple">mon serveur web </b>
                ou sur d'autres architectures comme sur mon{" "}
                <b className="purple">Raspberry Pi</b>.
              </i>
              <br />
              <br />
              Ma soif de connaissances m'amène également à consommer quotidiennement de la <b className="purple">vulgarisation scientifique </b>
              sur de nombreux domaines variés,
              comme <b className="purple">l'astronomie, la psycho-socio, ou la philosophie</b>.
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
                  alt="Lien vers mon github"
                  aria-label="Lien vers mon github"
                >
                  <AiFillGithub aria-label="github icon" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adam-rousselle-a17653245/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  alt="Lien vers mon Linked In"
                  aria-label="Lien vers mon Linked In"
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
