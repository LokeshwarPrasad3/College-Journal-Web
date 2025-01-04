const AbstractPopup = ({ popupPosition, setShowPopup, abstract }) => {
  return (
    <>
      <div
        onMouseOver={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
        className="abstract_popup_container absolute max-w-7xl bg-white text-black p-4 rounded-md basic_shadow z-[101]"
        style={{
          display: `${abstract} ? "" : "none"`,
          top: popupPosition.top,
        }}
      >
        <div className="data_box">{abstract}</div>
      </div>
    </>
  );
};

export default AbstractPopup;
