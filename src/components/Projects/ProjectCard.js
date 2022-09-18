import { Card, Button } from "react-bootstrap";
import { useTheme } from "../../App";

const ProjectCard = ({ imgPreview, title, description, client, server }) => {
  const { theme } = useTheme();

  return (
    <Card className="projects__card">
      <Card.Img
        variant="top"
        src={imgPreview}
        className="projects__card__img"
      />

      <Card.Body className="projects__card__body">
        <Card.Title className="projects__card__title">{title}</Card.Title>

        <Card.Text className="projects__card__desc">{description}</Card.Text>

        <div className="projects__card__buttons">
          {!client && (
            <Button
              style={
                theme === "night"
                  ? { background: "#11ffee", color: "#000" }
                  : {}
              }
              href={server}
              target="_blank"
              variant={theme === "day" ? "light" : "success"}
              className="projects__card__button"
            >
              GitHub
            </Button>
          )}
          {client && (
            <div className="projects__card__buttons">
              <Button
                style={
                  theme === "night"
                    ? { background: "#11ffee", color: "#000" }
                    : {}
                }
                href={client}
                target="_blank"
                variant={theme === "day" ? "light" : "success"}
                className="projects__card__button"
              >
                Client
              </Button>
              <Button
                style={
                  theme === "night"
                    ? { background: "#11ffee", color: "#000" }
                    : {}
                }
                href={server}
                target="_blank"
                variant={theme === "day" ? "light" : "success"}
                className="projects__card__button"
              >
                Server
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
