import React from "react";
import { Route, Redirect } from "react-router-dom";
import isUserLoggedIn from "../../api/auth/isUserLoggedin";

export const PublicRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isUserLoggedIn() ? (
          <Redirect
            to={{
              pathname: "/home",
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};
