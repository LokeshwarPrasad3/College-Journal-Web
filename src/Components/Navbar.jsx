import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NavbarLinks } from '../Utils/NavbarLinks';
import AppLogoImage from "../assets/Images/logo.png";

const Navbar = () => {
  // state which store current width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isMobile = windowWidth <= 1024;
  const [showResNavbar, setShowResNavbar] = useState(true);

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
    window.addEventListener('resize', handleWindowResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <>
      {/* navbar structure */}
      <nav
        id="navbar"
        className="navbar-container flex justify-center items-center flex-col text-white sticky top-0 left-0 right-0 w-full"
      >
        {/* header section where name and logo of business */}
        <header className="navbar_header flex justify-center items-center flex-col bg-app_header_bg w-full py-4">
          <Link to="/" className="heading_logo  transform-none h-12">
            <img src={AppLogoImage} alt="logo" className="h-full" />
          </Link>
          <Link className="heading_name cursor-pointer px-4 text-xl text-center font-semibold">
            International Journal Of Scientific Research For Global Innovation
          </Link>
          <p className="text-center mt-2 lg:mt-0 static lg:absolute top-4 left-5 text-base font-semibold">
            ISSN: 3049-009X (Online)
          </p>
        </header>
        {/* show navbar-menu */}
        <div
          className={`${showResNavbar ? 'absolute lg:static -top-[72vh]' : 'absolute lg:static top-full'} flex lg:items-center items-start justify-center flex-row px-0 lg:p-2 bg-white lg:bg-app_header_bg w-full transition-all duration-300 ease-in-out -z-10 pb-0 border-0 border-t border-app_border lg:h-auto responsive_navbar_height`}
        >
          <ul
            id="nav_ul"
            className="flex lg:gap-2 justify-start lg:justify-center items-start lg:items-center font-medium w-full flex-col lg:flex-row  "
          >
            {NavbarLinks.map(({ name, link }, index) => (
              <li
                key={index}
                className="nav_list flex px-2 py-3 lg:px-0 lg:py-0 lg:border-0 border-b border-[#bebdbd] w-full lg:w-auto items-start lg:items-center justify-start lg:justify-center "
              >
                <Link
                  onClick={toggleResNavbar}
                  className="nav_link lg:hover:bg-[#395a8f] hover:bg-slate-200 lg:hover:text-white text-black lg:text-white custom_transtion text-base lg:text-lg py-1 px-3 cursor-pointer rounded-md custom_transtion "
                  to={link}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div
        className={`menu_button ${isMobile ? 'flex' : 'hidden'} text-white justify-center items-center fixed top-8 right-0 `}
      >
        {!showResNavbar ? (
          <i
            onClick={toggleResNavbar}
            className={`ri-close-line text-4xl absolute right-3 cursor-pointer`}
          ></i>
        ) : (
          <i
            onClick={toggleResNavbar}
            className={`ri-menu-2-line text-3xl absolute right-3 cursor-pointer`}
          ></i>
        )}
      </div>
    </>
  );
};

export default Navbar;
