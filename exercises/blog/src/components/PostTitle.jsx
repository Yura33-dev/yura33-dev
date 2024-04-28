import { useContext } from 'react';
import { PostContext } from './Post';

function PostTitle() {
  const post = useContext(PostContext);

  return <h3>{post.title}</h3>;
}

export default PostTitle;
