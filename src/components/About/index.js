import { Container } from "react-bootstrap";
import innovation from "../../assets/innovation.svg";
import "./about.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaNode,
  FaReact,
  FaJava,
  FaGitAlt,
  FaJsSquare,
} from "react-icons/fa";
import { DiPostgresql } from "react-icons/di";

export default function About() {
  return (
    <Container className="about-me-container">
      <div className="mb-5 about-me__top-layout">
        <div className="intro-card">
          <h1>
            <span className="green">Hi!</span>
            <span className="wave">👋🏻</span>
            <p>
              My name is <span className="green">Paulo</span>.
            </p>
          </h1>
          <h2 style={{ color: "#fff" }}>
            Portuguese, currently based in{" "}
            <span className="green">Belfast, UK</span>.
          </h2>
          <br />
          <div className="intro-card__interests">
            <p>My main interests outside of coding are:</p>
            <ul>
              <li>
                <span className="green">&#9856;</span> Technology
              </li>
              <li>
                <span className="green">&#9857;</span> Crypto
              </li>
              <li>
                <span className="green">&#9858;</span> Blockchain
              </li>
              <li>
                <span className="green">&#9859;</span> Gaming
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img className="about-me__image" src={innovation} alt="innovation" />
        </div>
      </div>

      <div className="mb-5 about-me__bottom">
        <div className="title-wrapper mb-3">
          <h2 className=" green">My toolbox:</h2>
        </div>
        <div className="tools-layout">
          <div className="tool-container">
            <FaJsSquare size={50} />
          </div>

          <div className="tool-container">
            <FaNode size={50} />
          </div>

          <div className="tool-container">
            <FaJava size={50} />
          </div>

          <div className="tool-container">
            <FaReact size={50} />
          </div>

          <div className="tool-container">
            <DiPostgresql size={50} />
          </div>

          <div className="tool-container">
            <FaGitAlt size={50} />
          </div>

          <div className="tool-container">
            <FaHtml5 size={50} />
          </div>

          <div className="tool-container">
            <FaCss3Alt size={50} />
          </div>
        </div>
      </div>
    </Container>
  );
}
