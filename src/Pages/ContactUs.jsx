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
              <a href="mailto:editor@ijsrgi.com">editor@ijsrgi.com</a>
            </li>
            <li>
              For Publication Queries Contact No.
              <span className="mono"> +91 922911555</span>&nbsp;,
              <span className="mono"> +91 78282 49416</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
