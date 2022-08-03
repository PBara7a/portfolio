import { Card, Button } from "react-bootstrap";

const ProjectCard = ({ imgPreview, title, description, github, server }) => {
  const btnCustom = {
    display: "inline-block",
    color: "#000",
    backgroundColor: "#ccff00",
    border: "none",
    margin: "0 0.3rem",
    width: "5rem",
  };

  return (
    <div className="card-frame">
      <Card className="projects__card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgPreview} />
        <Card.Body>
          <Card.Title style={{ color: "#ccff00" }}>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          {!server && (
            <Button
              href={github}
              target="_blank"
              style={btnCustom}
              variant="primary"
              className="btn-custom"
            >
              GitHub
            </Button>
          )}
          {server && (
            <>
              <Button
                href={github}
                target="_blank"
                style={btnCustom}
                variant="primary"
                className="btn-custom"
              >
                Client
              </Button>
              <Button
                href={server}
                target="_blank"
                style={btnCustom}
                variant="primary"
                className="btn-custom"
              >
                Server
              </Button>
            </>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProjectCard;
