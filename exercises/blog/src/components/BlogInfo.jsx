import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

function BlogInfo() {
  const context = useContext(BlogContext);

  return <div className="mb-5">{context}</div>;
}

export default BlogInfo;
