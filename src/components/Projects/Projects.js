import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pokefight from "../../Assets/Projects/project1.png";
import rpg from "../../Assets/Projects/project2.png";
import meteo from "../../Assets/Projects/project3.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">applications</strong> récentes
        </h1>
        <p style={{ color: "white" }}>
          Quelques applications sur lesquelles j'ai travaillé récement
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokefight}
              isBlog={false}
              title="Pokéfight"
              description="Jeu de combat au tour par tour dans l'univers de Nintendo, Pokémon. Technologies : PHP et javascript from scratch, tailwindCSS"
              ghLink="https://github.com/AdamRse/pokefight"
              demoLink="https://pokemon.adam.rousselle.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpg}
              isBlog={false}
              title="RPG rumble"
              description="Un jeu de combat tour par tour.Technologie : React"
              ghLink="https://github.com/AdamRse/react-combat404"
              demoLink="https://react-combat404-8x1j4izcw-adamrses-projects.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meteo}
              isBlog={false}
              title="Météo"
              description="Application météo basée sur l'API openweather.com. Technologie : React"
              ghLink="https://github.com/AdamRse/react-meteo"
              demoLink="https://meteo.adam.rousselle.me/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
