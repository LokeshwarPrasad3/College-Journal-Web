import { useEffect } from 'react';
import '../CSS/Contents.css';
import ReadMore from './ReadMore';

const Contents = () => {
  useEffect(() => {
    // Scroll to the top when the location changes (route change) or on component mount
    window.scrollTo(0, 0);

    // For additional support on mobile devices
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="info_container">
        {/* <h2 className="heading">Contents</h2> */}
        <h2 className="heading">
          International Journal of Scientific research for global Innovation
        </h2>
        <div className="info_grid">
          <div className="grids" id="grid-3">
            <p className="grid_heading">About the Journal</p>
            <p className="grid_para">
              International Journal Of Scientific Research For Global Innovation
              is a leading international journal for publication of new
              ideas.The primary goal of the editors is to maintain high quality
              of publications on theoretical
              <ReadMore color={'white'} path={'/about'} />
            </p>
            <img className="img-grid" src="./Images/about-us.png" alt="" />
          </div>
          <div className="grids" id="grid-4">
            <p className="grid_heading">Editorial Policies</p>
            <p className="grid_para">
              International Journal Of Scientific Research For Global Innovation
              is an open access peer-reviewed journal which considers
              manuscripts which comply our instruction with authors. The
              manuscripts are initially screened by the editorial members for
              its scientific content, format
              <ReadMore color={'white'} path={'/policies'} />
            </p>
            <img className="img-grid" src="./Images/review.png" alt="" />
          </div>
          <div className="grids" id="grid-2">
            <p className="grid_heading">Instructions to Author</p>
            <p className="grid_para">
              The journal operates on a biannual schedule, following the
              continuous publication model, and welcomes submissions from
              researchers worldwide in various multidisciplinary fields.
              Submissions undergo initial
              <ReadMore color={'white'} path={'/instruction-author'} />
            </p>
            <img className="img-grid" src="./Images/author.png" alt="" />
          </div>
          <div className="grids" id="grid-3">
            <p className="grid_heading">Peer Review Policy</p>
            <p className="grid_para">
              Authors of original research should present an accurate account of
              the work performed and the results, followed by an objective
              discussion of the significance of the work. The manuscript should
              contain sufficient detail
              <ReadMore color={'white'} path={'/review-policy'} />
            </p>
            <img className="img-grid" src="./Images/review-policy.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
