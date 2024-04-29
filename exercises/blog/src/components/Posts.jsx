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
    <section>
      <div className="xl:container mx-auto px-5">
        <ul className="list-none">
          {posts.map(post => (
            <li key={post.id} className="mb-10 bg-slate-200 rounded-md p-4">
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Posts;
