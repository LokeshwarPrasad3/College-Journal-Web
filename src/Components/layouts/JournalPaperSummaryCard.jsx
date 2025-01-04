import { Link } from 'react-router-dom';
import { useState } from 'react';
import AbstractPopup from './AbstractPopup';

const JournalPaperSummaryCard = ({ element }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const handleMouseOver = (event) => {
    const rect = event.target.getBoundingClientRect();
    setPopupPosition({ top: rect.bottom + window.scrollY, left: rect.left });
    setShowPopup(true);
  };

  const handleMouseOut = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <AbstractPopup
          setShowPopup={setShowPopup}
          popupPosition={popupPosition}
          index={element.index}
          abstract={element.abstract}
        />
      )}
      <div className=" mx-auto w-[90%] p-4 flex flex-col justify-start items-start gap-0 border border-slate-200 rounded-md small_shadow">
        <p className="">
          <a
            target="_blank"
            rel="noreferrer"
            className="text-link_text text-base"
            href={element?.filePath}
          >
            {element?.message}
          </a>
        </p>
        <p className="author text-base font-semibold">{element?.author}</p>
        {element?.college_name && (
          <p className="college font-normal ">{element?.college_name}</p>
        )}
        <div className="key_buttons flex justify-end items-center gap-5 w-full text-sm font-medium">
          <div
            className="abstract_link flex justify-center items-center gap-1 text-black py-2 px-4 "
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <i className="ri-file-pdf-line"></i>
            <Link>Abstract</Link>
          </div>
          <div className="full_text_pdf_link flex justify-center items-center gap-1 text-black py-2 px-4">
            <i className="ri-file-pdf-2-line"></i>
            <a
              target="_blank"
              rel="noreferrer"
              style={{ color: '#393987' }}
              href={element.filePath}
            >
              Full-Text-PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JournalPaperSummaryCard;
