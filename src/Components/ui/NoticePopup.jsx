import { useState, useEffect } from "react";
import "../../CSS/NoticeBar.css"; // Import the custom CSS file
import { Link } from "react-router-dom";

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
              style={{ height: "50px", marginRight: "0.5vw" }}
              src="./Images/new-new.gif"
            />
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/call-for-paper"
            >
              <h2>Call for Paper</h2>
              <p>Volume 1, Issue 2</p>
              <p>Last date of submission: 30th June 2024</p>
            </Link>
            <button className="close-btn" onClick={handleClose}>
              <i
                style={{ fontSize: "2rem", color: "white" }}
                className="ri-close-fill"
              ></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NoticePopup;
