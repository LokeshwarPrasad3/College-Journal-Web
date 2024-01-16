import { editorsList } from "../Utils/EditorsName";
import React from "react";
import "../CSS/EditorBoard.css"

const EditorBoard = () => {
  return (
    <>
      <div className="editorboard_container page">
        <h1 className="main_heading" style={{fontFamily: "overpass ", textTransform: "capatilize", fontSize: '2rem'}} >List of Editor&apos;s Board</h1>

        {/* chief of editor container */}
        <div className="chief_container">
          <p className="editor_sub_heading" >Editor in Chief</p>
          <div className="chief_box">
            <div className="chief_image">
            <b className="chief_name">Dr. Gyanesh Shrivastava</b>
            </div>
            <p className="chief_degree">
              M.Sc., M. Phil. (CS), PhD Computer Science & Applications
            </p>
            <p className="chief_college">
             Principal <br /> Rungta Institute of Science and Management, Bhilai
            </p>
            {/* <p className="chief_designation">Principal</p> */}
            <p>
contact :  &nbsp;
            <a
              href="mailto:gyanesh.shrivastava@rungtacolleges.com"
              className="chief_email"
              >
              gyanesh.shrivastava@rungtacolleges.com
            </a>
              </p>
          </div>
        </div>

        {/* another editors name  */}
        <div className="all_editors_container">
          <p className="editor_sub_heading" >Editors</p>
          <div className="editor_container">
            {editorsList &&
              editorsList.map((editor, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="editor_box">
                      <div className="editor_image">
                      <b className="editor_name">{editor?.name}</b>
                      </div>
                      <p className="editor_degree">{editor?.degree}</p>
                      <p className="editor_designation">
                        {editor?.designation}
                      </p>
                      <p className="editor_college">
                        {editor?.college}
                      </p>
                      <p>
                        {editor?.email?"contact : ":""}
                        <a
                          href={`mailto:${editor?.email}`}
                          className="editor_email"
                        >
                          {editor?.email}
                        </a>
                      </p>
                    </div>
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default EditorBoard;
