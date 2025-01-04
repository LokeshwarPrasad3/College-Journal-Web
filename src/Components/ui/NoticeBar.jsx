import { Link } from 'react-router-dom';

const NoticeBar = () => {
  return (
    <>
      <div className="notification-bar bg-notification_bar_bg flex justify-center items-center py-3 px-1 text-white gap-4 text-xl">
        <Link
          className="link_call_paper"
          style={{ textDecoration: 'none' }}
          to="/call-for-paper"
        >
          <p className="notice_description hover:text-[#00ffff] text-base flex justify-center items-center flex-wrap text-center ">
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
