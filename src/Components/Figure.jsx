import { useEffect, useState } from 'react';
import HeroSectionImage from '../assets/Images/hero_section_image.jpg';

const Figure = () => {
  // state which store current width of window
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      <div className="main_image_container h-[400px]">
        <img
          className="main_image relative z-[-4] w-full h-full object-cover opacity-70"
          src={HeroSectionImage}
          alt="research-image"
        />
      </div>
    </>
  );
};

export default Figure;
