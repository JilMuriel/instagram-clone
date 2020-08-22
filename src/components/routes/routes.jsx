import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../home/home";
import Index from "../pages/inbox/inbox";
import PageNotFound from "../pages/404/page-not-found";

const ROUTES = [
  {
    path: "/",
    key: "ROOT",
    exact: true,
    component: () => <Home />,
  },
  {
    path: "/direct/inbox",
    key: "INBOX",
    component: () => <Index />,
  },
  {
    path: "/explore",
    key: "INBOX",
    component: () => <h1>Explore</h1>,
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
