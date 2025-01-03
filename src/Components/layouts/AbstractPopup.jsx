import "../../CSS/AbstractPopup.css";

const AbstractPopup = ({ index, popupPosition, setShowPopup, abstract }) => {
  return (
    <>
      <div
        onMouseOver={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
        className="abstract_popup_container"
        style={{
          display: `${abstract}?"":"none"`,
          top: popupPosition.top,
        }}
      >
        <div className="data_box">{abstract}</div>
      </div>
    </>
  );
};

export default AbstractPopup;
