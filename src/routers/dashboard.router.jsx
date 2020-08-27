import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "../data/routes";

import { Navbar } from "../components/navigation/navbar.component";
import { Sidebar } from "../components/navigation/sidebar.component";

export const DashboardRouter = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className={"container-fluid"}>
        <div className={"row"}>
          <Sidebar routes={routes} />
          <main className={"col-md-9 ml-sm-auto col-lg-10 px-md-4"}>
            <Switch>
              {routes.map((route, i) => (
                <Route key={i} exact path={route.pathname} component={route.component} />
              ))}
            </Switch>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};
