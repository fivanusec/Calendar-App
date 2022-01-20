import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../Modules/Login";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        {/* <Route path='/home' ={<Home />} /> */}
      </Switch>
    </BrowserRouter>
  );
};
