import React from "react";
import "./post.styles.css";

export const Post = () => {
  return (
    <article className="post">
      {/* header -> avatar + username */}
      <div className="post__header">
        <div>header</div>
        <div>...</div>
      </div>
      {/* image */}
      <div className="post__image">
        <img className="post_image" src="" alt="" />
      </div>
      {/* username + caption */}
      <div className="post__footer">footer</div>
    </article>
  );
};

export default Post;
