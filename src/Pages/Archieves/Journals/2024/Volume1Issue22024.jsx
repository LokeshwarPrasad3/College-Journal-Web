import PdfViewer from '../../../../Components/layouts/PdfViewer';
import { volume_1_issue_2_jouranl_list_data } from '../../../../Utils/JournalsData/2024/volume-1-issue-2/valume-1-issue-2-data';
import '../../../../CSS/Pages.css';

const Volume1Issue22024 = () => {
  return (
    <>
      <div className="volumeIssue_container">
        <div className="volumeIssue_heading">
          <h2>Volume 1 issue 2 2024</h2>
        </div>
        <div className="volumeIssue_pdf_container">
          {volume_1_issue_2_jouranl_list_data.map((element, index) => (
            <PdfViewer key={index} element={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Volume1Issue22024;
