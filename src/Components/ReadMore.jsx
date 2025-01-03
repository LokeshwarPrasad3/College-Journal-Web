import { Link } from 'react-router-dom';

const ReadMore = ({ color, path }) => {
  return (
    <>
      <Link style={{ color: `${color}` }} className="read_more" to={path}>
        Read More..
      </Link>
    </>
  );
};

export default ReadMore;
