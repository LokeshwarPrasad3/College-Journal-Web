import JournalPaperSummaryCard from '../../../../Components/layouts/JournalPaperSummaryCard';
import { volume_2_issue_1_jouranal_list_data } from '../../../../Utils/JournalsData/2025/volume-2-issue-1/valume-2-issue-1-data';
import '../../../../CSS/Pages.css';

const Volume2Issue12025 = () => {
  return (
    <>
      <div className="volumeIssue_container">
        <div className="volumeIssue_heading">
          <h2>Volume 2 issue 1 2025</h2>
        </div>
        <div className="volumeIssue_pdf_container">
          {volume_2_issue_1_jouranal_list_data.map((element, index) => (
            <JournalPaperSummaryCard key={index} element={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Volume2Issue12025;
