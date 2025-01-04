const ContactUs = () => {
  return (
    <>
      <div className="max_width_content_page px-5 flex flex-col w-full justify-start items-start gap-0 text-justify py-8 ">
        <h2 className="text-2xl font-bold text-center w-full">Contact us</h2>
        <hr className="w-full mt-4 opacity-60 max-w-4xl mx-auto" />
        <div className="contacts flex justify-center items-center w-full flex-wrap gap-9 py-8 px-3">
          {/* left side */}
          <div className="basic_shadow max-w-sm w-full chief_box p-4 flex flex-col justify-center items-center bg-[#F9FAFB] ">
            <h3 className="text-base text-center break-words font-bold">
              PUBLISHER
            </h3>
            <h4 className="text-base text-center break-words font-bold">
              Sanjay Rungta Group of Institutions,{' '}
            </h4>
            <p className="text-base text-center break-words">
              Rungta Knowledge city, Kohka- Kurud road, Bhilai- 490024
            </p>
            <p>
              {' '}
              E-Mail :
              <a
                className="text-base text-center break-words text-link_text"
                href="mailto:editor.ijsrgi@rungtacolleges.com"
              >
                editor.ijsrgi@rungtacolleges.com
              </a>
            </p>
            <p>For Publication Queries Contact No : </p>
            <p>
              <span style={{ textDecoration: 'underline' }}>
                +91 9229155599
              </span>
              &nbsp;,&nbsp;
              <span style={{ textDecoration: 'underline' }}>
                +91 7828249416
              </span>
            </p>
          </div>

          {/* right part */}
          <div className="basic_shadow max-w-sm w-full chief_box p-4 flex flex-col justify-center items-center bg-[#F9FAFB] ">
            <h3 className="text-base text-center break-words font-bold">
              CHIEF EDITOR
            </h3>
            <b className="text-base text-center break-words">
              Dr. Gyanesh Shrivastava
            </b>
            <p className="text-base text-center break-words">
              M.Sc., M. Phil. (CS), PhD Computer Science & Applications
            </p>
            <b className="text-base text-center break-words">Principal</b>
            <p className="text-base text-center break-words">
              Rungta Institute of Science and Management, Bhilai
            </p>
            <p className="text-base text-center break-words">
              E-Mail :&nbsp;
              <a
                href="mailto:editor.ijsrgi@rungtacolleges.com"
                className="chief_email text-link_text"
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
