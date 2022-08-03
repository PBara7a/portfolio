import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import cv from "../../assets/Paulo-Barata-cv.pdf";
import cvDownload from "../../assets/Paulo-Barata-cv-download.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const btnCustom = {
  display: "inline-block",
  color: "#000",
  backgroundColor: "#ccff00",
  border: "none",
};

const Resume = () => {
  const [page, setPage] = useState(1);
  const [vw] = useState(document.documentElement.clientWidth);

  const handleClick = () => {
    page === 1 ? setPage(2) : setPage(1);
  };

  return (
    <Container className="cv-container">
      <Document file={cv} className="d-flex justify-content-center">
        {page === 1 && (
          <Page
            className="mb-3"
            pageNumber={1}
            scale={vw > 900 ? 1.5 : vw > 600 ? 1 : vw > 480 ? 0.8 : 0.6}
            style={{ backgroundColor: "#000" }}
          />
        )}
        {page === 2 && (
          <Page
            className="mb-3"
            pageNumber={2}
            scale={vw > 900 ? 1.5 : vw > 600 ? 1 : vw > 480 ? 0.8 : 0.6}
            style={{ backgroundColor: "#000" }}
          />
        )}
      </Document>

      <Button
        style={btnCustom}
        href={cvDownload}
        target="_blank"
        className="btn-custom mb-2"
      >
        Download
      </Button>

      <Button
        style={btnCustom}
        className="btn-custom mb-2 ms-5 me-1"
        onClick={handleClick}
      >
        <AiFillCaretLeft />
      </Button>
      <Button
        style={btnCustom}
        className="btn-custom mb-2"
        onClick={handleClick}
      >
        <AiFillCaretRight />
      </Button>
    </Container>
  );
};

export default Resume;
