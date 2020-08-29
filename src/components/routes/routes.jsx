import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../home/home";
import Inbox from "../pages/inbox/inbox";
import Profile from "../pages/profile/profile";
import PageNotFound from "../pages/404/page-not-found";
import Login from '../pages/login/login';

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/login",
    key: "LOGIN",
    exact: true,
    component: () => <Login />
  },
  {
    path: "/direct/inbox",
    key: "INBOX",
    component: () => <Inbox />,
  },
  {
    path: "/explore",
    key: "INBOX",
    component: () => <h1>Explore</h1>,
  },
  {
    path: "/jilmuriel",
    key: "PROFILE",
    component: () => <Profile />,
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
