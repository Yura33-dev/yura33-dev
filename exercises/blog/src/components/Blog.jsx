/* eslint-disable react/prop-types */
// src/components/Blog.tsx

function Blog(props) {
  return (
    <article className="post">
      <div className="cover-container">
        <img src={props.post.cover} alt={props.post.title} />
      </div>
      <div className="post-footer">
        <h3>
          {props.post.title} {props.post.id}
        </h3>
        <p>{props.post.content}</p>
      </div>
    </article>
  );
}
export default Blog;
