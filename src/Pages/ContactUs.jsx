import "../CSS/Pages.css";

const ContactUs = () => {
  
  return (
    <>
      <div className="contact_us_container">
        <h2 className="about_heading sub-heading">Head Office</h2>
        <hr style={{ opacity: "1" }} />
        <div className="add-lists">
          <ul className="about_points">
            <li>
              Girija Apartment, Third Floor, 100 Feet Road, Jawaharlal Nehru
              Salai, Arumbakkam, Chennai, Tamil Nadu 600106.
            </li>
            <li>
              <a href="mailto:info@ardaconference.com">
                info@ardaconference.com
              </a>
            </li>
            <li>
              For Conference Queries :{" "}
              <span className="mono"> +91 9344535349</span>
            </li>
            <li>
              For Publication Queries :{" "}
              <span className="mono"> +91 9345684472</span>{" "}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
