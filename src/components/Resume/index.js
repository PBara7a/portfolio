import { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import cv from "../../assets/Paulo-Barata-cv.pdf";
import cvDownload from "../../assets/Paulo-Barata-cv-download.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "./resume.css";

const btnCustom = {
  display: "inline-block",
  color: "#000",
  backgroundColor: "#ccff00",
  border: "none",
};

const Resume = () => {
  const [pdfScale, setPdfScale] = useState(1.5);
  const vw = document.documentElement.clientWidth;

  useEffect(() => {
    if (vw < 900) setPdfScale(1);
    else if (vw < 600) setPdfScale(0.8);
    else if (vw < 480) setPdfScale(0.6);
  }, [vw]);

  return (
    <Container className="cv-container">
      <Document file={cv} className="d-flex justify-content-center">
        <Page
          className="mb-3"
          pageNumber={1}
          scale={pdfScale}
          style={{ backgroundColor: "#000" }}
        />
      </Document>

      <Button
        style={btnCustom}
        href={cvDownload}
        target="_blank"
        className="btn-custom mb-2"
      >
        Download
      </Button>
    </Container>
  );
};

export default Resume;
