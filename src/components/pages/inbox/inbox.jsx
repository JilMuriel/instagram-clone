import React from "react";
import "./inbox.styles.css";

import { Link } from "react-router-dom";

const currentLink = "/direct/inbox";

const inboxLink = [
  {
    name: "PRIMARY",
    link: `${currentLink}/`,
  },
  {
    name: "GENERAL",
    link: `${currentLink}/general`,
  },
  {
    name: "Request",
    link: `${currentLink}/request`,
  },
];

const userMessages = [
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
  {
    username: "jilmuriel",
    message: "asdasdasdasdasdlkjas",
  },
];

export const Inbox = () => {
  return (
    <div className="inbox">
      <div className="inbox__card">
        <div className="inbox-card__sidebar">
          <div className="inbox-card-sidebar__header">
            <div className="inbox-card-sidebar-header__title">
              <span>Direct</span>
            </div>
            <div className="inbox-card-sidebar-header__icon">
              <svg
                aria-label="New Message"
                class="_8-yf5 "
                fill="#262626"
                height="24"
                viewBox="0 0 44 44"
                width="24"
              >
                <path d="M33.7 44.12H8.5a8.41 8.41 0 01-8.5-8.5v-25.2a8.41 8.41 0 018.5-8.5H23a1.5 1.5 0 010 3H8.5a5.45 5.45 0 00-5.5 5.5v25.2a5.45 5.45 0 005.5 5.5h25.2a5.45 5.45 0 005.5-5.5v-14.5a1.5 1.5 0 013 0v14.5a8.41 8.41 0 01-8.5 8.5z"></path>
                <path d="M17.5 34.82h-6.7a1.5 1.5 0 01-1.5-1.5v-6.7a1.5 1.5 0 01.44-1.06L34.1 1.26a4.45 4.45 0 016.22 0l2.5 2.5a4.45 4.45 0 010 6.22l-24.3 24.4a1.5 1.5 0 01-1.02.44zm-5.2-3h4.58l23.86-24a1.45 1.45 0 000-2l-2.5-2.5a1.45 1.45 0 00-2 0l-24 23.86z"></path>
                <path d="M38.2 14.02a1.51 1.51 0 01-1.1-.44l-6.56-6.56a1.5 1.5 0 012.12-2.12l6.6 6.6a1.49 1.49 0 010 2.12 1.51 1.51 0 01-1.06.4z"></path>
              </svg>
            </div>
          </div>
          <nav className="inbox-card-sidebar__nav">
            <div className="inbox-menu">
              {inboxLink.map((item) => (
                <Link className="inbox-menu__links" to={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="inbox-card-sidebar__body">
            <div className="inbox-card-sidebar__wrapper">
              {userMessages.map((item) => (
                <div className="inbox-message__item">
                  <div className="inbox-message__image">
                    <img src="https://instagram.fmnl4-6.fna.fbcdn.net/v/t51.2885-19/s150x150/101054364_705767389997757_2860042374791299072_n.jpg?_nc_ht=instagram.fmnl4-6.fna.fbcdn.net&_nc_ohc=xc6Z-_-_hSYAX-FtK7W&oh=9cef9c432838e6bf0c77285867e3a681&oe=5F5BF7D6" />
                  </div>
                  <div className="inbox-message__description">
                    <span className="inbox-message__name">{item.username}</span>
                    <span className="inbox-message__message">
                      {item.message}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="inbox-card__chatbox">
          <div className="chatbox__wrapper">
            <span className="chatbox__image"></span>
            <h1 className="chatbox__title">Your Messages</h1>
            <p className="chatbox__message">
              Send private photos and messages to a friend or group.
            </p>
            <button className="chatbox__button">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
