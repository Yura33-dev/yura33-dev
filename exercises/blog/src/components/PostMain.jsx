import { useContext } from 'react';
import { PostContext } from './Post';

function PostMain() {
  const post = useContext(PostContext);
  return <p>{post.content}</p>;
}

export default PostMain;
