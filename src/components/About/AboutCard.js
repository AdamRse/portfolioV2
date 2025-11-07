import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {

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
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis <span className="purple">généraliste</span> dans mon approche du développement web, je considère qu'il est important d'avoir des connaissances
            <span className="purple"> Front</span>, <span className="purple">Back</span>, et aussi <span className="purple">administration système</span>, pour une meilleure <span className="purple">vue d'ensemble</span>.
          </p>
          <p style={{ textAlign: "justify" }}>
            J'ai beaucoup codé from scratch avant l'IA, et m'intéresse davantage aux <span className="purple">bonnes pratiques</span>, comme les <span className="purple">design patterns</span> et le paradigme <span className="purple">SOLID</span>.
            <br/>
            Je considère que l'IA peut apporter beaucoup au développeur, mais qu'elle ne peut pas le remplacer ; les connaissances restent <span className="purple">fondamentales</span> pour maintenir un projet.
          </p>
          <p style={{ textAlign: "justify" }}>
            J'administre plusieurs serveurs <span className="purple">Debian</span> et j'apprends seul à utiliser <span className="purple">Docker</span> et <span className="purple">Kubernetes</span> pour déployer des projets.
          </p>
          {/* <p style={{ textAlign: "justify" }}>
            J'ai {calculateAge()} ans, actuellement en formation de concepteur d'applications web au garage404 à <span className="purple">ROANNE (42)</span>.
            <br />
            Étant spécialisé dans le code <span className="purple">from scratch</span> via mon auto-entreprise, je cherche à gagner de l'expérience dans le <span className="purple">travail d'équipe</span>,
            et sur les <span className="purple">frameworks et bibliothèques populaires</span>.
          </p>
          <p style={{ textAlign: "justify" }}>
            Grâce à mon diplôme de développeur web et web mobile obtenu fin 2024, cumulé à mon expérience d'auto-entreprise et ma pratique du web, je suis <span className="purple">rapidement opérationnel</span>.
            <br />
            Parmi mes principaux hobbies :
          </p> */}
          <ul>
            <li className="about-activity">
              <ImPointRight /> La programmation et les systèmes Linux
            </li>
            <li className="about-activity">
              <ImPointRight /> La vulgarisation scientifique 
            </li>
            <li className="about-activity">
              <ImPointRight /> Les jeux vidéo
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dans la vie rien n'est à craindre, tout est à comprendre."{" "}
          </p>
          <footer className="blockquote-footer">Marie Curie</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
