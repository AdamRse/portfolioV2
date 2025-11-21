import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import money_report from "../../Assets/Projects/money-report.png";
import ubuntu_ls from "../../Assets/Projects/ubuntu-ls.png";
import pokefight from "../../Assets/Projects/project1.png";
import rpg from "../../Assets/Projects/project2.png";
//import meteo from "../../Assets/Projects/project3.png";
import exponentielle from "../../Assets/Projects/exponentielle.png";
import vestiaire from "../../Assets/Projects/Vestiaire-Officiel.png";

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
              imgPath={money_report}
              isBlog={false}
              title="Money Report"
              description="Application de simplification de déclaration de revenus. Application des principes SOLID et des design pattern."
              ghLink="https://github.com/AdamRse/money-report"
              demoLink="https://money-report.adam.rousselle.me/"
              technos="Laravel avec Eloquent"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vestiaire}
              isBlog={false}
              title="Vestiaire Officiel"
              description="Site créé pour l'entreprise Vestiaire Officiel (Partie Front-End)"
              ghLink="https://github.com/AdamRse/vestaire-officiel-front"
              demoLink="https://vestaire-officiel-front.vercel.app/"
              technos="Angular, Tailwind"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ubuntu_ls}
              isBlog={false}
              title="Automatisation Linux"
              description="Divers programmes bash pour simplifier l'utilisation de linux."
              ghLink="https://github.com/AdamRse/ubuntu_local_scripts"
              technos="Bash, Make, Argbash"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokefight}
              isBlog={false}
              title="Pokéfight"
              description="Jeu de combat au tour par tour dans l'univers de Nintendo, Pokémon."
              ghLink="https://github.com/AdamRse/pokefight"
              demoLink="https://pokemon.adam.rousselle.me/"
              technos="PHP et javascript from scratch, tailwindCSS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exponentielle}
              isBlog={false}
              title="L'Exponentielle"
              description="Site vitrine et e-commerce collaboratif pour un festival de science fictif."
              demoLink="https://lexponentielle.projets.p8.garage404.com/"
              technos="WordPress (Elementor)"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rpg}
              isBlog={false}
              title="RPG rumble"
              description="Un jeu de combat tour par tour."
              ghLink="https://github.com/AdamRse/react-combat404"
              demoLink="https://react-combat404-8x1j4izcw-adamrses-projects.vercel.app"
              technos="React"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meteo}
              isBlog={false}
              title="Météo"
              description="Application météo basée sur l'API openweather.com."
              ghLink="https://github.com/AdamRse/react-meteo"
              demoLink="https://meteo.adam.rousselle.me/"
              technos="React"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
