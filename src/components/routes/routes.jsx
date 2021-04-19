import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../home/home";
import Inbox from "../pages/inbox/inbox";
import Profile from "../pages/profile/profile";
import PageNotFound from "../pages/404/page-not-found";
import Login from "../pages/login/login";
import SignUp from "../pages/sign-up/sign-up";
import Header from "../../components/header/header";

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: () => (
      <Header>
        <Home />
      </Header>
    ),
  },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    component: () => <Login />,
  },
  {
    path: "/sign-up",
    key: "SIGNUP",
    exact: true,
    component: () => <SignUp />,
  },
  {
    path: "/direct/inbox",
    key: "INBOX",
    component: () => (
      <Header>
        <Inbox />
      </Header>
    ),
  },
  {
    path: "/explore",
    key: "INBOX",
    component: () => <h1>Explore</h1>,
  },
  {
    path: "/jilmuriel",
    key: "PROFILE",
    component: () => (
      <Header>
        <Profile />
      </Header>
    ),
  },
];

function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={(props) => <route.component {...props} routes={route.routes} />}
    />
  );
}
export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      <Route component={() => <PageNotFound />} />
    </Switch>
  );
}

export default ROUTES;
