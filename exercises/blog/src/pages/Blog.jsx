import Posts from '../components/Posts';
import BlogInfo from '../components/BlogInfo';
import BlogContextProvider from '../context/BlogContext';

function BlogPage() {
  const blogName = 'My Blog!';

  return (
    <BlogContextProvider value={blogName}>
      <BlogInfo />
      <Posts />
    </BlogContextProvider>
  );
}

export default BlogPage;
