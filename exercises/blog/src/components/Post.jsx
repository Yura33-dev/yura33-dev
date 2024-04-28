import { useEffect, useState } from 'react';

function Post() {
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(0);

  useEffect(() => {
    async function getData() {
      const post = await fetchData();
      setPost(post);
      setLike(post.likes);
    }
    getData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        'https://my-json-server.typicode.com/yura33-dev/db/posts/1'
      );
      const data = await response.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  }

  function likeThis() {
    setLike(like => like + 1);
  }

  return (
    <article className="post">
      <div className="cover-container">
        <img src={post.cover} alt={post.title} />
      </div>
      <div className="post-footer">
        <h3>
          {post.title} {post.id}
        </h3>
        <p>{post.content}</p>
        <button id="like" onClick={likeThis}>
          Like this post <strong>{like}</strong>
        </button>
      </div>
    </article>
  );
}

export default Post;
