import React from "react";
import "./home.styles.css";

import StoryBar from "../storybar/storybar";
import Post from "../post/post";
import ProfileCard from "../profile-card/profile-card";


const footerListLinks = [
  {
    title: "About",
    link: "link",
  },
  {
    title: "Help",
    link: "link",
  },
  {
    title: "API",
    link: "link",
  },
  {
    title: "Jobs",
    link: "link",
  },
  {
    title: "Privacy",
    link: "link",
  },
  {
    title: "Terms",
    link: "link",
  },
  {
    title: "Location",
    link: "link",
  },
  {
    title: "Top Accounts",
    link: "link",
  },
  {
    title: "Hashtags",
    link: "link",
  },
  {
    title: "Language",
    link: "link",
  },
];

const userStoriesList = [
  {
    username: "JohnDoe",
    name: "john",
    follower: false,
  },
  {
    username: "JohnDoe",
    name: "john",
    follower: true,
  },
  {
    username: "JohnDoe",
    name: "john",
    follower: false,
  },
  {
    username: "JohnDoe",
    name: "john",
    follower: false,
  },
  {
    username: "JohnDoe",
    name: "john",
    follower: true,
  },
];

export const Home = () => {
  const profilePicture =
    "https://instagram.fmnl4-6.fna.fbcdn.net/v/t51.2885-19/s150x150/101054364_705767389997757_2860042374791299072_n.jpg?_nc_ht=instagram.fmnl4-6.fna.fbcdn.net&_nc_ohc=xc6Z-_-_hSYAX-FtK7W&oh=9cef9c432838e6bf0c77285867e3a681&oe=5F5BF7D6";
  return (
    <div className="home">
      <main className="home__container">
        <section className="content">
          <StoryBar />
          <Post />
          <Post />
          <Post />
        </section>
        <div className="sidebar">
          <div className="sidebar__profile">
            <ProfileCard
              profileImage={profilePicture}
              size="md"
              username="jilmuriel"
              name="Jil"
            />
          </div>
          <div className="sidebar__stories">
            <div className="sidebar-stories__header">
              <span className="sidebar-stories-header__title">
                Suggestions For You
              </span>
              <span className="sidebar-stories-header__link">See All</span>
            </div>
          </div>
          <div className="profile-user">
            {userStoriesList.map((item) => (
              <ProfileCard
                profileImage={profilePicture}
                size="sm"
                username={item.username}
                name={item.name}
                follower
              />
            ))}
          </div>

          <div className="sidebar-stories__footer">
            <div className="sidebar-footer__wrapper-link">
              {footerListLinks.map((item) => (
                <span className="sidebar-footer__link">{item.title}</span>
              ))}
            </div>
            <div className="sidebar-footer__copyright">
              <span className="sidebar-footer-copyright__text">
                © 2020 INSTAGRAM CLONE BY JIL MURIEL
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
