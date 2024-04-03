import { Link } from "react-router-dom";
import "../CSS/PdfViewer.css";
import { useState } from "react";
import AbstractPopup from "./AbstractPopup";

const PdfViewer = ({ element }) => {
  const [showAbstractPopup, setShowAbstractPopup] = useState(false);

  // show abstract when hover
  const ShowAbstractDocs = (elementIndex) => {
    console.log(elementIndex);
    setShowAbstractPopup(true);
  };

  const HideAbstractDocs = () => {
    setShowAbstractPopup(false);
  };

  return (
    <>
      {showAbstractPopup && <AbstractPopup index={element.index} />}
      <div className="pdf-container">
        <p className="quotes">
          <a
            href={`./PDF/IJSRGI paper ${
              element.index < 10 ? `0${element.index}` : element.index
            }.pdf`}
          >
            {element.message}
          </a>
        </p>
        <p className="author">{element.author}</p>
        <p className="college">{element.college_name}</p>
        <div className="key_buttons">
          <div
            className="abstract_link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.2rem",
              color: "black",
            }}
            onMouseOver={() => ShowAbstractDocs(element.index)}
            onMouseLeave={() => HideAbstractDocs(element.index)}
          >
            <i className="ri-file-pdf-line"></i>
            <Link>Abstract</Link>
          </div>
          <div
            className="full_text_pdf_link"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.2rem",
            }}
          >
            <i className="ri-file-pdf-2-line"></i>
            <a
              style={{ color: "#393987" }}
              href={`./PDF/IJSRGI paper ${
                element.index < 10 ? `0${element.index}` : element.index
              }.pdf`}
            >
              Full-Text-PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default PdfViewer;
