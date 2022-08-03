import { Container, Row, Col } from "react-bootstrap";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container fluid>
        <Row>
          <Col md />
          <Col className="copyright-container">
            <span className="copyright">Copyright © {year}</span>
          </Col>
          <Col>
            <div className="socials-container">
              <div
                variant="dark"
                action
                href="https://github.com/pbara7a"
                target="_blank"
              >
                <BsGithub />
              </div>

              <div
                action
                href="https://www.linkedin.com/in/paulo-barata/"
                target="_blank"
              >
                <BsLinkedin />
              </div>

              <div
                action
                href="https://www.instagram.com/p_bara7a/"
                target="_blank"
              >
                <BsInstagram />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
