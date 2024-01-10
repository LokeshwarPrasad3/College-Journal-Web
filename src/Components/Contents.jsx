import { useEffect } from "react";
import "../CSS/Contents.css";
import ReadMore from "./ReadMore";

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
              International Journal of Scientific research for global Innovation
              is designed to publish research articles in Engineering &
              Technology, Mathematics, Management, Medical Sciences, Medicine,
              <ReadMore color={"blue"} path={"/about"} />
            </p>
            <img className="img-grid" src="./Images/about-us.jpg" alt="" />
          </div>
          <div className="grids" id="grid-4">
            <p className="grid_heading">Editorial Policies</p>
            <p className="grid_para">
              IJSRGI is an open access peer-reviewed journal which considers
              manuscripts which comply our instruction with authors. The
              manuscripts are initially screened by the editorial
              <ReadMore color={"white"} path={"/policies"} />
            </p>
            <img className="img-grid" src="./Images/review.jpg" alt="" />
          </div>
          <div className="grids" id="grid-2">
            <p className="grid_heading">Instructions to Author</p>
            <p className="grid_para">
              The Journal is published monthly adopting the continuous
              publication model and submission is open to researchers in the
              field of medicalsubjects areas across the globe.
              <ReadMore color={"white"} path={"/instruction-author"} />
            </p>
            <img className="img-grid" src="./Images/author.png" alt="" />
          </div>
          <div className="grids" id="grid-3">
            <p className="grid_heading">Peer Review Policy</p>
            <p className="grid_para">
              Contribution to editorial decisions Peer review assists editors in
              making editorial decisions and, through editorial communications
              with authors, may assist authors in improving their
              <ReadMore color={"blue"} path={"/review-policy"} />
            </p>
            <img className="img-grid" src="./Images/review-policy.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contents;
