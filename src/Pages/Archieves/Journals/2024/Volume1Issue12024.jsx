import { volume_1_issue_1_journal_list_data } from '../../../../Utils/JournalsData/2024/volume-1-issue-1/valume-1-issue-1-data';
import JournalPaperSummaryCard from '../../../../Components/layouts/JournalPaperSummaryCard';

const Volume1Issue12024 = () => {
  return (
    <>
      <div className="volumeIssue_container pb-4">
        <div className="volumeIssue_heading my-4 mt-6">
          <h2 className="text-2xl font-bold text-center">
            Volume 1 issue 1 2024
          </h2>
        </div>
        <div className="volumeIssue_pdf_container max_width_content_page flex flex-col gap-4">
          {volume_1_issue_1_journal_list_data.map((element, index) => (
            <JournalPaperSummaryCard key={index} element={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Volume1Issue12024;
