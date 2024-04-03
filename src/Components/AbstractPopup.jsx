import { useState } from "react";
import "../CSS/AbstractPopup.css";
import { abstractContents } from "../data/AbstractContent";

const AbstractPopup = ({ index }) => {

  return (
    <>
      <div
        className="abstract_popup_container"
        style={{
          display: `${abstractContents[index - 1]}?"":"none"`,
        }}
      >
        <div className="data_box">{abstractContents[index - 1]?.data}</div>
      </div>
    </>
  );
};

export default AbstractPopup;
