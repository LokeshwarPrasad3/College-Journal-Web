import { Link } from 'react-router-dom';
import '../../CSS/JournalPaperSummaryCard.css';
import { useState, useEffect } from 'react';
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
  // const [showAbstractPopup, setShowAbstractPopup] = useState(false);
  // const [isHovering, setIsHovering] = useState(false);

  // useEffect(() => {
  //   let timeoutId;
  //   if (isHovering) {
  //     timeoutId = setTimeout(() => setShowAbstractPopup(true), 100);
  //   } else {
  //     timeoutId = setTimeout(() => setShowAbstractPopup(false), 100);
  //   }
  //   return () => clearTimeout(timeoutId);
  // }, [isHovering]);

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
      <div className="pdf-container">
        <p className="quotes">
          <a target="_blank" rel="noreferrer" href={element.filePath}>
            {element.message}
          </a>
        </p>
        <p className="author">{element.author}</p>
        <p className="college">{element.college_name}</p>
        <div className="key_buttons">
          <div
            className="abstract_link"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.2rem',
              color: 'black',
              padding: '10px 15px',
              position: 'relative',
              zIndex: '-10'
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <i className="ri-file-pdf-line"></i>
            <Link>Abstract</Link>
          </div>
          <div
            className="full_text_pdf_link"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.2rem',
            }}
          >
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
