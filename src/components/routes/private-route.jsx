import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../../components/auth/auth";

const PrivateRoute = ({ component: RouteComponent, ...props }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        )
      }
    ></Route>
  );
};
export default PrivateRoute;
