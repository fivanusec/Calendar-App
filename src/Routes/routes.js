import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import PrivateRoute from "../Components/PrivateRoute";
import PublicRoute from "../Components/PublicRoute";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute path="/" exact>
          <Login />
        </PublicRoute>
        <PrivateRoute path="/home" exact>
          <Home />
        </PrivateRoute>
        <Route path="*">
          <div>Not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
