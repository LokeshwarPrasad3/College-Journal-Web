import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useEffect } from 'react';

const Layout = () => {
  return (
    <>
      <div className="app_layout_container font-roman">
        <Navbar />
        <div className="app_pages_layout_container text-black">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
