import React from "react";
import "./post.styles.css";
import ProfileCard from "../profile-card/profile-card";

const profileImage =
  "https://instagram.fmnl4-6.fna.fbcdn.net/v/t51.2885-19/s150x150/101054364_705767389997757_2860042374791299072_n.jpg?_nc_ht=instagram.fmnl4-6.fna.fbcdn.net&_nc_ohc=xc6Z-_-_hSYAX-FtK7W&oh=9cef9c432838e6bf0c77285867e3a681&oe=5F5BF7D6";

export const Post = () => {
  return (
    <article className="post">
      {/* header -> avatar + username */}
      <div className="post__header">
        <div className="post-header__profile">
          <ProfileCard
            size="sm"
            username="jilmuriel"
            profileImage={profileImage}
          />
        </div>
        <div>...</div>
      </div>
      {/* image */}
      <div className="post__image">
        <img src="https://images.pexels.com/photos/887723/pexels-photo-887723.jpeg?cs=srgb&dl=pexels-helena-lopes-887723.jpg&fm=jpg" alt="" />
      </div>
      {/* username + caption */}
      <div className="post__footer">footer</div>
    </article>
  );
};

export default Post;
