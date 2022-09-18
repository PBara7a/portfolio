import { useState } from "react";
import { Link } from "react-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import cvDownload from "../../assets/Paulo-Barata-cv-download.pdf";
import ToggleButton from "../../utils/ToggleButton";
import {
  FaUserAstronaut,
  FaRegFileAlt,
  FaLaptopCode,
  FaSun,
} from "react-icons/fa";
import { useTheme } from "../../App";
import "./header.css";

export default function Header() {
  const [navbarClass, setNavbarClass] = useState("header");
  const { theme, toggleTheme } = useTheme();

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
      sticky="top"
      variant="dark"
      expand="md"
      collapseOnSelect={true}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="root"
          smooth={true}
          offset={-50}
          duration={5}
          className="header__brand"
        >
          Pb
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll" className="navbar">
          <Nav>
            <Nav.Item>
              <Nav.Link as={Link} to="about" offset={-150}>
                <FaUserAstronaut className="header-icon" /> About me
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="projects" offset={-150}>
                <FaLaptopCode className="header-icon" /> Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="contact">
                <FaLaptopCode className="header-icon" /> Contact
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href={cvDownload} target="_blank" active={false}>
                <FaRegFileAlt className="header-icon" /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="toggle-container">
              <Nav.Link onClick={toggleTheme}>
                <FaSun className="header-icon" /> Daylight
              </Nav.Link>
              <ToggleButton theme={theme} toggleTheme={toggleTheme} />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
