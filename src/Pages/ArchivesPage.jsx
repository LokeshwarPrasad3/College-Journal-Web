import { Link } from "react-router-dom";

const ArchivesPage = () => {
  return (
    <>
      <div
        className="archives_container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "2rem 0.2rem",
        }}
      >
        {/* <h2>Archives</h2> */}
        {/* <br /> */}
        {/* <hr style={{ opacity: "0.7" }} /> */}
        <div
          className="list_of_archives"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem 0.2rem",
          }}
        >
          <Link to="/volume-1-issue-1-2024" style={{ fontSize: "1.2rem" }}>
            Volume-1-issue-1-2024
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArchivesPage;
