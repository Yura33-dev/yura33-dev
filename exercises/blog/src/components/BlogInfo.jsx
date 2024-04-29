import { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

function BlogInfo() {
  const context = useContext(BlogContext);

  return (
    <div className="container mx-auto px-5">
      <div className="py-4 text-2xl text-center">
        This is a blog info: {context}
      </div>
    </div>
  );
}

export default BlogInfo;
