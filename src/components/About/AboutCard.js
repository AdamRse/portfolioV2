import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            J'ai 34 ans, actuellement en formation développeur web au garage404 à <span className="purple">ROANNE (42)</span>.
            <br />
            Étant spécialisé dans le code <span className="purple">from scratch</span> via mon auto-entreprise, je cherche à gagner de l'expérience dans le <span className="purple">travail d'équipe</span>,
            et sur les <span className="purple">frameworks et bibliothèques populaires</span>.
            <br />
            Parmi mes principaux hobbies :
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Le code from scratch
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
