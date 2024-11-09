import "../CSS/Navbar.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // state which store current width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showResNavbar, setShowResNavbar] = useState(false);

  //
  const toggleResNavbar = () => {
    setShowResNavbar(!showResNavbar);
  };

  useEffect(() => {
    // function set current innerWidth
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
      console.log(window.innerWidth);
    };
    // Attach event listener for window resize
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
      {/* navbar structure */}
      <nav id="navbar" className="navbar-container">
        {/* header section where name and logo of business */}
        <header className="navbar_header">
          <Link to="/" className="heading_logo">
            <img src="./Images/logo.png" alt="Pet" className="h-12" />
          </Link>
          <h1 onClick={() => navigate("/")} className="heading_name">
            International Journal Of Scientific Research For Global Innovation
          </h1>
        </header>
        {/* show navbar-menu */}
        <div
          style={{
            left: `${showResNavbar ? "0%" : "100%"}`,
            // display: `${windowWidth < 800 ? "none" : "flex"}`,
          }}
          id="navbar_menu"
          className={`custom-transition ${
            showResNavbar ? "show_menu" : "hide_menu"
          } `}
        >
          <ul id="nav_ul">
            {/* <li className="nav_list ">
              <Link onClick={toggleResNavbar} className="nav_link" to="/">
                Home
              </Link>
            </li> */}
            <li className="nav_list">
              <Link onClick={toggleResNavbar} className="nav_link " to="/about">
                About Journal
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link "
                to="/policies"
              >
                Editorial Policies
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link "
                to="/editor-board"
              >
                Editor Board
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link "
                to="/instruction-author"
              >
                Instructions to Author
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link "
                to="/review-policy"
              >
                Review Policy
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link "
                to="/call-for-paper"
              >
                Call for Paper
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link "
                to="/archives"
              >
                Archives
              </Link>
            </li>
            <li className="nav_list">
              <Link
                onClick={toggleResNavbar}
                className="nav_link "
                to="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="menu_button"
          style={{
            display: `${windowWidth < 800 ? "flex" : "none"}`,
          }}
        >
          {showResNavbar ? (
            <i
              onClick={toggleResNavbar}
              style={{ fontSize: "2.2rem" }}
              className={`ri-close-line`}
            ></i>
          ) : (
            <i
              onClick={toggleResNavbar}
              style={{ fontSize: "2.2rem" }}
              className={`ri-menu-fill `}
            ></i>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
