import { editorsList } from '../Utils/EditorsName';
import { useEffect } from 'react';

const EditorBoard = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <div className="max_width_content_page px-5 flex flex-col w-full justify-start items-start gap-4 text-justify py-8 ">
        <h2 className="text-2xl font-bold text-center w-full">
          List of Editor&apos;s Board
        </h2>
        {/* chief of editor container */}
        <div className="chief_container flex justify-center items-center gap-4 w-full flex-col ">
          <p className="text-xl font-bold">Editor in Chief</p>
          <div className="basic_shadow max-w-sm w-full chief_box p-4 flex flex-col justify-center items-center bg-[#F9FAFB] ">
            <b className="text-base">Dr. Gyanesh Shrivastava</b>
            <p className="chief_degree text-base text-center">
              M.Sc., M. Phil. (CS), PhD Computer Science & Applications
            </p>
            <p className="chief_college text-base text-center">
              Principal <br /> Rungta Institute of Science and Management,
              Bhilai
            </p>
            <p className="text-base text-center">
              contact :&nbsp;
              <a
                href="mailto:editor.ijsrgi@rungtacolleges.com"
                className="chief_email text-slate-500"
              >
                editor.ijsrgi@rungtacolleges.com
              </a>
            </p>
          </div>
        </div>

        {/* another editors name  */}
        <div className="all_editors_container flex justify-center items-center gap-4 w-full flex-col py-2">
          <p className="text-xl font-bold">Editors</p>
          <div className="editor_container grid grid-cols-6 col-span-6 gap-8 w-full justify-items-center">
            {editorsList &&
              editorsList.map((editor, index) => {
                return (
                  <div
                    key={index}
                    className="editor_box col-span-6 md:col-span-3 lg:col-span-2 basic_shadow p-4 flex flex-col bg-[#F9FAFB] max-w-sm w-full"
                  >
                    <b className="editor_name text-base text-center break-words">
                      {editor?.name}
                    </b>
                    <p className="editor_degree text-center break-words">
                      {editor?.degree}
                    </p>
                    <p className="editor_designation text-base text-center break-words">
                      {editor?.designation}
                    </p>
                    <p className="editor_college text-base text-center break-words">
                      {editor?.college}
                    </p>
                    <p className="text-base text-center break-words ">
                      {editor?.email ? 'contact : ' : ''}
                      <a
                        href={`mailto:${editor?.email}`}
                        className="editor_email text-slate-500"
                      >
                        {editor?.email}
                      </a>
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorBoard;
