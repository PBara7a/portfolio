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
              <a href="https://github.com/pbara7a" target="_blank">
                <div>
                  <BsGithub />
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/paulo-barata/"
                target="_blank"
              >
                <div>
                  <BsLinkedin />
                </div>
              </a>
              <a href="https://www.instagram.com/p_bara7a/" target="_blank">
                <div>
                  <BsInstagram />
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
