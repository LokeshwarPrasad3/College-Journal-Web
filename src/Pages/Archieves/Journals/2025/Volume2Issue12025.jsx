import JournalPaperSummaryCard from '../../../../Components/layouts/JournalPaperSummaryCard';
import { volume_2_issue_1_jouranal_list_data } from '../../../../Utils/JournalsData/2025/volume-2-issue-1/valume-2-issue-1-data';

const Volume2Issue12025 = () => {
  return (
    <>
      <div className="volumeIssue_container pb-4">
        <div className="volumeIssue_heading my-4 mt-6">
          <h2 className="text-2xl font-bold text-center">
            Volume 2 issue 1 2025
          </h2>
        </div>
        <div className="volumeIssue_pdf_container max_width_content_page flex flex-col gap-4">
          {volume_2_issue_1_jouranal_list_data.map((element, index) => (
            <JournalPaperSummaryCard key={index} element={element} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Volume2Issue12025;
