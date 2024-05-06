import { useState, useEffect } from "react";
import "../../CSS/NoticeBar.css"; // Import the custom CSS file

const NoticePopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    setShowPopup(true); // Set showPopup to true when the component mounts
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="notice-popup">
          <div className="popup-content">
            <img
              style={{ height: "30px", marginRight: "0.5vw" }}
              src="./Images/new-new.gif"
            />
            <h2>Call for Paper</h2>
            <p>Volume 1, Issue 2</p>
            <p>Last date of submission: 30th June 2024</p>
            <button className="close-btn" onClick={handleClose}>
              <i style={{ fontSize: "2rem" }} className="ri-close-fill"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoticePopup;
