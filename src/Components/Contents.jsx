import { useEffect } from 'react';
import { mainPageSummaryBoxData } from '../Utils/SummaryBoxContent';
import { Link } from 'react-router-dom';

const Contents = () => {
  useEffect(() => {
    // Scroll to the top when the location changes (route change) or on component mount
    window.scrollTo(0, 0);

    // For additional support on mobile devices
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="info_container md:p-8 mx-auto md:mb-0 mb-8 px-2 py-5 text-black">
        {/* <h2 className="heading">Contents</h2> */}
        <h2 className="heading capitalize text-center px-2 font-semibold text-2xl mb-4">
          International Journal of Scientific research for global Innovation
        </h2>
        <div className="info_grid grid gap-0 text-white grid-cols-12 col-span-12 text-justify">
          {mainPageSummaryBoxData?.map(
            ({ heading, content, bg, path, imagePath }, index) => (
              <div
                key={index}
                style={{ background: bg }}
                className={`col-span-12 rounded-md md:col-span-6 lg:col-span-3 p-5 border border-[#ccc] flex gap-4 flex-col`}
              >
                <p className="grid_heading m-0 text-xl">{heading}</p>
                <p className="grid_para capitalize text-base my-2 mx-0">
                  {content}&nbsp;
                  <Link
                    className="read_more text-[#ffffff] font-bold text-base transition-all duration-300 ease-in"
                    to={path}
                  >
                    Read More..
                  </Link>
                </p>
                {/* <img className="img-grid w-20" src={imagePath} alt="" /> */}
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Contents;
