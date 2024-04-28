import { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData().then(response => setPosts(response));
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/yura33-dev/db/posts'
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ul className="list-none">
      {posts.map(post => (
        <li key={post.id} className="mb-10 bg-slate-200 rounded-lg p-8">
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}

export default Posts;
