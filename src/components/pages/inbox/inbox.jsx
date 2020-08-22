import React from "react";
import "./inbox.styles.css";

import { NavLink, Switch, Route } from "react-router-dom";
import InboxPrimary from "./options/primary/inbox-primary";
import InboxGeneral from "./options/general/inbox-general";

const currentLink = "/direct/inbox";

const inboxLink = [
  {
    name: "PRIMARY",
    link: `${currentLink}/`,
    isExact: "exact",
  },
  {
    name: "GENERAL",
    link: `${currentLink}/general`,
  },
  {
    name: "Request(1)",
    link: `${currentLink}/request`,
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
                <NavLink
                  className="inbox-menu__links"
                  activeClassName="inbox-menu__links-active"
                  to={item.link}
                  exact
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </nav>
          <div className="inbox-card-sidebar__body">
            <div className="inbox-card-sidebar__wrapper">
              <Switch>
                <Route exact path={`${currentLink}`}>
                  <InboxPrimary />
                </Route>
                <Route path={`${currentLink}/general`}>
                  <InboxGeneral />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
        <div className="inbox-card__chatbox">
          <div className="chatbox__wrapper">
            <Switch>
              <Route exact path={`${currentLink}`}>
                <span className="chatbox__image"></span>
                <h1 className="chatbox__title">Your Messages</h1>
                <p className="chatbox__message">
                  Send private photos and messages to a friend or group.
                </p>
                <button className="chatbox__button">Send Message</button>
              </Route>
              <Route path={`${currentLink}/general`}>
                <span className="chatbox__image"></span>
                <h1 className="chatbox__title">Your General Messages</h1>
                <p className="chatbox__message">
                  Notifications are off for messages you move here, but you can
                  turn them on anytime.
                </p>
                <button className="chatbox__button">
                  Go to Notifications Settings
                </button>
              </Route>
              <Route path={`${currentLink}/request`}>
                <h1 className="chatbox__title">Message Requests</h1>
                <p className="chatbox__message">
                  These messages are from people you've restricted or don't
                  follow. They won't know you viewed their request until you
                  allow them to message you.
                </p>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
