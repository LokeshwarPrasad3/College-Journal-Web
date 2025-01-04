import { Link } from 'react-router-dom';
import '../../CSS/NoticeBar.css';

const NoticeBar = () => {
  return (
    <>
      <div className="notification-bar">
        <Link
          className="link_call_paper"
          style={{ textDecoration: 'none' }}
          to="/call-for-paper"
        >
          <p className="notice_description">
            <img
              style={{ height: '30px', marginRight: '0.5vw' }}
              src="./Images/new-new.gif"
            />
            <span> Call for paper , </span>
            <span> Volume 2 Issue 2 ,&nbsp;</span>
            <span> Last date of submission : 30/06/2025</span>
          </p>
        </Link>
      </div>
    </>
  );
};

export default NoticeBar;
