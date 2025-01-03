import { Link } from 'react-router-dom';

const ArchivesPage = () => {
  const archievesData = [
    {
      name: 'Volume 1 issue 1 2024',
      link: '/volume-1-issue-1-2024',
    },
    {
      name: 'Volume-1-issue-2-2024',
      link: '/volume-1-issue-2-2024',
    },
    {
      name: 'Volume-2-issue-1-2025',
      link: '/volume-2-issue-1-2025',
    },
  ];

  return (
    <>
      <div
        className="archives_container"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '2rem 0.2rem',
        }}
      >
        {/* <h2>Archives</h2> */}
        {/* <br /> */}
        {/* <hr style={{ opacity: "0.7" }} /> */}
        {archievesData.map(({ name, link }, index) => (
          <div
            key={index}
            className="list_of_archives"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem 0.2rem',
            }}
          >
            <Link to={link} style={{ fontSize: '1.2rem' }}>
              {name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArchivesPage;
