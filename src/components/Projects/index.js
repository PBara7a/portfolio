import { Container, Card, Button, Carousel } from "react-bootstrap";
import rustychainPreview from "../../assets/rustychain-preview.png";
import "./projects.css";

const btnCustom = {
  display: "inline-block",
  color: "#000",
  backgroundColor: "#ccff00",
  border: "none",
  margin: "0 0.3rem",
  width: "5rem",
};

const Projects = () => {
  return (
    <Container className="projects-container">
      <h1 data-text="Recent projects" className="light">
        Recent projects
      </h1>

      <Container className="d-flex justify-content-center">
        {/* <Carousel>
          <Carousel.Item> */}
        <Card className="projects__card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={rustychainPreview} />
          <Card.Body>
            <Card.Title style={{ color: "#ccff00" }}>Rustychain</Card.Title>
            <Card.Text>
              Full stack blockchain application. Transactions are validated and
              recorded. Frontend: React. Backend: Node, Express, PubNub.
            </Card.Text>
            <Button
              href="https://github.com/PBara7a/rustychain"
              target="_blank"
              style={btnCustom}
              variant="primary"
              className="btn-custom"
            >
              GitHub
            </Button>
            <Button
              href="https://calm-harbor-77723.herokuapp.com/"
              target="_blank"
              style={btnCustom}
              variant="primary"
              className="btn-custom"
            >
              Demo
            </Button>
          </Card.Body>
        </Card>
        {/* </Carousel.Item>
        </Carousel> */}
      </Container>
    </Container>
  );
};

export default Projects;
