import { Container, Row, Col } from "react-bootstrap";
import codingImg from "../../assets/coding3.svg";
import TypedStuff from "../../utils/Typewriter";
import "./home.css"

const styling = {
  marginTop: "10rem",
  color: "#ccff00",
  fontWeight: 600,
};

export default function Home() {
  return (
    <section style={styling}>
      <Container className="mb-5">
        <Row>
          <Col className="home-intro">
            <h1>Paulo Barata</h1>
            <h2>Full Stack Developer</h2>
            <div className="typed-text">
              <TypedStuff />
            </div>
          </Col>

          <Col>
            <img
              src={codingImg}
              alt="computer"
              style={{ maxHeight: "450px", opacity: "0.95" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
