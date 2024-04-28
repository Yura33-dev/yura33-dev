/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';

function Post({ post }) {
  const [likes, setLikes] = useState();

  useEffect(() => {
    setLikes(post.likes);
  }, []);

  function clickHandler() {
    setLikes(like => like + 1);
  }

  return (
    <article className="post">
      <div className="cover-container mb-3 max-w-md h-64 m-[0_auto]">
        <img src={post.cover} alt={post.title} className="object-cover" />
      </div>
      <div className="post-footer">
        <h3 className="mb-4">
          {post.title} {post.id}
        </h3>
        <p className="mb-4">{post.content}</p>
        <button
          id="like"
          onClick={clickHandler}
          className="bg-orange-200 p-3 rounded-md"
        >
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </article>
  );
}

export default Post;
