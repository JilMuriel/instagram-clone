import React from "react";
import "./home.styles.css";

import StoryBar from "../storybar/storybar";
import Post from "../post/post";

export const Home = () => {
  return (
    <div className="home">
      <main className="home__container">
        <section className="content">
          <StoryBar />
          <Post />
        </section>
        <div className="sidebar">
          <div className="sidebar-container">hello from sidebar</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
