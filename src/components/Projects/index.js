import { Container } from "react-bootstrap";
import rustychainPreview from "../../assets/rustychain-preview.png";
import ProjectCard from "./ProjectCard";
import "./projects.css";

const Projects = () => {
  return (
    <Container className="projects-container">
      <h1 data-text="Recent projects" className="light">
        Recent projects
      </h1>

      <Container className="d-flex justify-content-center">
        <ProjectCard
          imgPreview={rustychainPreview}
          title="Rustychain"
          description="Full stack blockchain application. Transactions are validated
                  and recorded on the chain. Frontend: React. Backend: Node, Express, PubNub."
          github="https://github.com/PBara7a/rustychain"
          demo="https://calm-harbor-77723.herokuapp.com/"
        />
      </Container>
    </Container>
  );
};

export default Projects;
