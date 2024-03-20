import "../CSS/Pages.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact_us_container">
        <h2 className="about_heading sub-heading">Head Office</h2>
        <hr style={{ opacity: "1" }} />
        <div className="add-lists">
          <ul className="aboutus_points">
            <li>
              {" "}
              Sanjay Rungta Group of Institutions, Rungta Knowledge city, Kohka-
              Kurud road, Bhilai- 490024
            </li>
            <li>
              <a href="mailto:editor.ijsrgi@rungtacolleges.com">
                editor.ijsrgi@rungtacolleges.com
              </a>
            </li>
            <li>
              <div
                className="info_"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  with: "100%",
                }}
              >
                <span>For Publication Queries Contact No : </span>&nbsp;
                <span style={{ textDecoration: "underline" }}>
                  +91 922911555
                </span>
                &nbsp;,&nbsp;
                <span style={{ textDecoration: "underline" }}>
                  +91 7828249416
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
