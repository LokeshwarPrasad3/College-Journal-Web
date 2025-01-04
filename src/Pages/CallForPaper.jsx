const CallForPaper = () => {
  return (
    <>
      <div className="max_width_content_page px-5 flex flex-col justify-center items-center gap-2 text-justify py-8 ">
        <p className="flex flex-col justify-center items-center gap-3 mt-10">
          <span className="instruct_email text-xl">
            Submit your paper to given email id
          </span>
          <a
            href="mailto:editor.ijsrgi@rungtacolleges.com"
            className="text-xl font-bold underline"
          >
            editor.ijsrgi@rungtacolleges.com
          </a>
        </p>
      </div>
    </>
  );
};

export default CallForPaper;
