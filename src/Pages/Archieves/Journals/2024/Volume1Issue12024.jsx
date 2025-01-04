import { volume_1_issue_1_journal_list_data } from '../../../../Utils/JournalsData/2024/volume-1-issue-1/valume-1-issue-1-data';
import '../../../../CSS/Pages.css';
import JournalPaperSummaryCard from '../../../../Components/layouts/JournalPaperSummaryCard';

const Volume1Issue12024 = () => {
  return (
    <>
      <div className="volumeIssue_container">
        <div className="volumeIssue_heading">
          <h2>Volume 1 issue 1 2024</h2>
        </div>
        <div className="volumeIssue_pdf_container">
          {volume_1_issue_1_journal_list_data.map((element, index) => (
            <JournalPaperSummaryCard key={index} element={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Volume1Issue12024;
