import "../CSS/Pages.css";

const ContactUs = () => {
  return (
    <>
      <div className="contact_us_container">
        <h2 className="about_heading sub-heading">Contact us</h2>
        <hr style={{ opacity: "1" }} />

        <div
          className="contacts"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "5vw",
            padding: "2rem 0.8rem",
          }}
        >
          {/* left side */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "24rem",
              backgroundColor: "rgb(251 247 247)",
              padding: "1.3rem 0.4rem",
              textAlign: "center",
              lineHeight: "24px",
            }}
          >
            <h3 style={{ marginBottom: "0.6rem" }}>PUBLISHER</h3>
            <h4>Sanjay Rungta Group of Institutions, </h4>
            <p>Rungta Knowledge city, Kohka- Kurud road, Bhilai- 490024</p>
            <p>
              {" "}
              E-Mail :
              <a href="mailto:editor.ijsrgi@rungtacolleges.com">
                editor.ijsrgi@rungtacolleges.com
              </a>
            </p>
            <p>For Publication Queries Contact No : </p>
            <p style={{ textDecoration: "underline" }}>
              +91 922911555 +91 7828249416
            </p>
          </div>

          {/* right part */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              width: "24rem",
              backgroundColor: "rgb(251 247 247)",
              padding: "1.3rem 0.4rem",
              textAlign: "center",
              lineHeight: "24px",
            }}
          >
            <h3 style={{ marginBottom: "0.6rem" }}>CHIEF EDITOR</h3>
            <b>Dr. Gyanesh Shrivastava</b>
            <p>M.Sc., M. Phil. (CS), PhD Computer Science & Applications</p>
            <b>Principal</b>
            <p>Rungta Institute of Science and Management, Bhilai</p>
            <p>
              contact :&nbsp;
              <a
                href="mailto:editor.ijsrgi@rungtacolleges.com"
                className="chief_email"
              >
                editor.ijsrgi@rungtacolleges.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
