import React from "react";
import "./profile.styles.css";

import ProfileStoryBar from "./profile-storybar/profile-storybar";
import UserStoriesItem from "../../user-stories-item/user-stories-item";

export const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__header">
        <div className="profile-header__img">
          <div className="profile-header-img__wrapper">
            <button className="profile-header-img-btn">
              <img
                src="https://instagram.fmnl4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101054364_705767389997757_2860042374791299072_n.jpg?_nc_ht=instagram.fmnl4-1.fna.fbcdn.net&_nc_ohc=osvKDZO_hWYAX8kyLu4&oh=2d9239725eaaf5ba384c37ec6c479894&oe=5F6FBE56"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className="profile-header__info">
          <div className="profile-info">
            <span className="profile-header-info__username">jilmuriel</span>
            <button className="profile-header-info__btn">Edit Profile</button>
            <button className="profile-header-info__btn-gear">
              <svg
                aria-label="Options"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                viewBox="0 0 48 48"
                width="24"
              >
                <path
                  clip-rule="evenodd"
                  d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div className="profile-header__stats">
            <div className="profile-header-stats__item">
              <span>88</span> posts
            </div>
            <div className="profile-header-stats__item">
              <span>239</span> followers
            </div>
            <div className="profile-header-stats__item">
              <span>391</span> following
            </div>
          </div>
          <div className="profile-header__description">
            <div className="profile-header-description__name">Jil</div>
            <div className="profile-header-description__body">
              UI/UX Designer | Web Developer | Photographer
              <br />
              I'm a weird coffee person ☕<br />
              📷 Sony a6000
            </div>
          </div>
        </div>
      </div>
      <div className="profile__stories">
        <ProfileStoryBar />
        <UserStoriesItem />
      </div>
    </div>
  );
};

export default Profile;
