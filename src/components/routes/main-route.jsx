import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./private-route";

import Home from "../home/home";
import Inbox from "../pages/inbox/inbox";
import Profile from "../pages/profile/profile";
import PageNotFound from "../pages/404/page-not-found";
import Login from "../pages/login/login";

export const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* <Route component={() => <PageNotFound />} /> */}
    </Switch>
  );
};

export default MainRoute;
