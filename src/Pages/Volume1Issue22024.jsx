import PdfViewer from "../Components/volume-1-issue-2/PdfViewer";
import { AuthorQuote } from "../Utils/AuthorQuotes/valume-1-issue-2/AuthorQuote";   
import "../CSS/Pages.css";

const Volume1Issue22024 = () => {
  return (
    <>
      <div className="volumeIssue_container">
        <div className="volumeIssue_heading">
          <h2>Volume 1 issue 2 2024</h2>
        </div>
        <div className="volumeIssue_pdf_container">
          {AuthorQuote.map((element, index) => (
            <PdfViewer key={index} element={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Volume1Issue22024;
