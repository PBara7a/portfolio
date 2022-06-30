import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  const iconStyles = {
    color: "white",
    background: "transparent",
    width: "auto",
    borderStyle: "none",
  };

  return (
    <footer>
      <Container fluid>
        <Row>
          <Col md />
          <Col>
            <span className="copyright">Copyright © {year}</span>
          </Col>
          <Col>
            <ListGroup horizontal>
              <ListGroup.Item
                style={iconStyles}
                variant="dark"
                action
                href="https://github.com/pbara7a"
                target="_blank"
              >
                <BsGithub />
              </ListGroup.Item>

              <ListGroup.Item
                style={iconStyles}
                action
                href="https://www.linkedin.com/in/paulo-barata/"
                target="_blank"
              >
                <BsLinkedin />
              </ListGroup.Item>

              <ListGroup.Item
                style={iconStyles}
                action
                href="https://www.instagram.com/p_bara7a/"
                target="_blank"
              >
                <BsInstagram />
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
