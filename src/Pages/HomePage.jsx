import { useEffect } from "react";
import Contents from "../Components/Contents";
import Figure from "../Components/Figure";
import NoticeBar from "../Components/ui/NoticeBar";

const HomePage = () => {
  useEffect(() => {
    // Scroll to the top when the location changes (route change) or on component mount
    window.scrollTo(0, 0);

    // For additional support on mobile devices
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <NoticeBar />
      <Figure />
      <Contents />
    </>
  );
};

export default HomePage;
