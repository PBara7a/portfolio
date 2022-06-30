import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import {
  FaHome,
  FaUserAstronaut,
  FaRegFileAlt,
  FaLaptopCode,
} from "react-icons/fa";
import "./header.css";

export default function Header() {
  const [selected, setSelected] = useState("home");
  const [navbarClass, setNavbarClass] = useState("header");

  const handleScroll = () => {
    if (window.scrollY >= 20) {
      setNavbarClass("header-translucid");
    } else {
      setNavbarClass("header");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <Navbar
      className={navbarClass}
      fixed="top"
      variant="dark"
      expand="md"
      collapseOnSelect={true}
    >
      <Container>
        <Navbar.Brand>Pb</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="navbar">
          <Nav
            activeKey={selected}
            onSelect={(selectedLink) => setSelected(selectedLink)}
          >
            <Nav.Item>
              <Nav.Link as={Link} to="/" eventKey="home">
                <FaHome
                  className="header-icon"
                  style={{ marginBottom: "0.23rem" }}
                />{" "}
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" eventKey="about">
                <FaUserAstronaut className="header-icon" /> About me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/resume" eventKey="resume">
                <FaRegFileAlt className="header-icon" /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/projects" eventKey="projects">
                <FaLaptopCode className="header-icon" /> Projects
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
