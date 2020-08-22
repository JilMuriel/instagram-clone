import React from "react";
import "./inbox-primary.styles.css";
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

export const InboxPrimary = () => {
  return (
    <>
      {userMessages.map((item) => (
        <div className="inbox-message__item">
          <div className="inbox-message__image">
            <img src="https://instagram.fmnl4-6.fna.fbcdn.net/v/t51.2885-19/s150x150/101054364_705767389997757_2860042374791299072_n.jpg?_nc_ht=instagram.fmnl4-6.fna.fbcdn.net&_nc_ohc=xc6Z-_-_hSYAX-FtK7W&oh=9cef9c432838e6bf0c77285867e3a681&oe=5F5BF7D6" />
          </div>
          <div className="inbox-message__description">
            <span className="inbox-message__name">{item.username}</span>
            <span className="inbox-message__message">{item.message}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default InboxPrimary;
