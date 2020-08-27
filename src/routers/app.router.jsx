import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import { Loading } from "../components/loading/loading.component";
import { ProtectedRoute } from "../components/privacity/protected-route.component";

import { LoginScreen } from "../pages/login.screen";
import { DashboardRouter } from "./dashboard.router";

import { GET_USER } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    user: state.state.user,
    loading: state.state.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthStateChange: () => {
      dispatch(GET_USER());
    }
  };
};

export const AppRouter = connect(
  mapStateToProps,
  mapDispatchToProps
)((props) => {

  const { user, loading, onAuthStateChange } = props;

  useEffect(() => {
    const unsuscribe = onAuthStateChange();
    return () => {
      unsuscribe();
    };
  }, [onAuthStateChange]);

  if (loading) {
    return (
      <div className={"bg-dark vh-100"}>
        <Loading />
      </div>
    )
  }

  return (
    <Router>
      <Switch>
        <Route exact path={"/login"} component={LoginScreen} />
        <ProtectedRoute path={"/"} user={user} component={DashboardRouter} />
      </Switch>
    </Router>
  );
});
