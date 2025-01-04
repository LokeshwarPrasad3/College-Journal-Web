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
      <div className="max_width_content_page px-5 flex flex-col justify-center items-center gap-6 text-justify py-8">
        {archievesData.map(({ name, link }, index) => (
          <div key={index} className="list_of_archives flex flex-col">
            <Link to={link} className="text-xl underline">
              {name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default ArchivesPage;
