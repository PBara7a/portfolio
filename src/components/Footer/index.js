import { Container, Row, Col } from "react-bootstrap";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <Container fluid>
        <Row>
          <Col />
          <Col>
            <h5>Copyright © {year} Paulo Barata</h5>
          </Col>
          <Col>
            <ul className="footer-icons">
              <li className="social-icon">
                <a
                  href="https://github.com/pbara7a"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://www.linkedin.com/in/paulo-barata/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsLinkedin />
                </a>
              </li>
              <li className="social-icon">
                <a
                  href="https://www.instagram.com/p_bara7a/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
