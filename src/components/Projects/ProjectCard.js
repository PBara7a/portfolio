import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ imgPreview, title, description, github, demo }) => {
  const btnCustom = {
    display: "inline-block",
    color: "#000",
    backgroundColor: "#ccff00",
    border: "none",
    margin: "0 0.3rem",
    width: "5rem",
  };

  return (
    <Card className="projects__card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={imgPreview} />
      <Card.Body>
        <Card.Title style={{ color: "#ccff00" }}>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button
          href={github}
          target="_blank"
          style={btnCustom}
          variant="primary"
          className="btn-custom"
        >
          GitHub
        </Button>
        {demo && (
          <Button
            href={demo}
            target="_blank"
            style={btnCustom}
            variant="primary"
            className="btn-custom"
          >
            Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
