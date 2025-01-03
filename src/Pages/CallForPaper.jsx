const CallForPaper = () => {
  return (
    <>
      <div className="callforpaper_container">
        <p
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <span className="instruct_email">
            Submit your paper to given email id
          </span>
          <a
            href="mailto:editor.ijsrgi@rungtacolleges.com"
            className="chief_email"
          >
            editor.ijsrgi@rungtacolleges.com
          </a>
        </p>
      </div>
    </>
  );
};

export default CallForPaper;
