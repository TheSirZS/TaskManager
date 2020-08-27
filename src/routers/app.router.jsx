import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginScreen } from "../pages/login.screen";
import { DashboardRouter } from "./dashboard.router";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/login"} component={LoginScreen} />
        <Route path={"/"} component={DashboardRouter} />
      </Switch>
    </Router>
  );
};
