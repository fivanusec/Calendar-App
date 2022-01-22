import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import PrivateRoute from "../Components/PrivateRoute";
import PublicRoute from "../Components/PublicRoute";
import NotFoundPage from "../Pages/NotFoundPage";

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
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
