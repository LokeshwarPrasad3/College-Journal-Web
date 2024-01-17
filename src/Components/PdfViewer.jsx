import "../CSS/PdfViewer.css";

const PdfViewer = ({ element }) => {
  return (
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
    </div>
  );
};

export default PdfViewer;
