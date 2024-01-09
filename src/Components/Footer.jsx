import { useEffect, useState } from "react";
import "../CSS/Footer.css";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const [route, setRoute] = useState("/");
  useEffect(() => {
    // This code will run when the component is first mounted
    const currentRoute = location.pathname;
    console.log("Current Route:", currentRoute);
    setRoute(currentRoute);

    // If you want to perform some cleanup when the component is unmounted, return a function from useEffect
    return () => {
      // Cleanup code goes here (optional)
    };
  }, [location]); // Include location in the dependency array to ensure it's updated when the route changes

  return route === "/login" || route === "/signup" || route === "/policies" ? (
    ""
  ) : (
    <footer className="footer">
      <p>© Copyright IJSRGI. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
