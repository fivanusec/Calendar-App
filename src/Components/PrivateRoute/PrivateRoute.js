import React from "react";
import { Route, Redirect } from "react-router-dom";
import isUserLoggedIn from "../../api/auth/isUserLoggedin";

export const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (isUserLoggedIn() ? children : <Redirect to="/" />)}
    />
  );
};
