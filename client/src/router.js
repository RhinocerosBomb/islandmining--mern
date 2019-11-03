import React from "react";
import {Route, Redirect, Router, Switch} from "react-router-dom";
import {connect} from "react-redux";
import asyncComponent from "./helpers/AsyncFunc";

const RestrictedRoute = ({component: Component, isLoggedIn, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: {from: props.location}
          }}
        />
      )
    }
  />
);
const PublicRoutes = ({history, isLoggedIn}) => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route
            exact
            path={"/"}
            component={asyncComponent(() => import("./Pages/Home"))}
          />
          <Route
            exact
            path={"/1"}
            component={asyncComponent(() => import("./Pages1/Home"))}
          />
          <Route
            exact
            path={"/register"}
            component={asyncComponent(() => import("./Pages/SignUp"))}
          />
          <Route
            exact
            path={"/register1"}
            component={asyncComponent(() => import("./Pages1/SignUp"))}
          />
          <Route
            exact
            path={"/login"}
            component={asyncComponent(() => import("./Pages/Login"))}
          />
          <Route
            exact
            path={"/login1"}
            component={asyncComponent(() => import("./Pages1/Login"))}
          />
          <RestrictedRoute
            path="/dashboard"
            component={asyncComponent(() => import("./Pages/Dashboard"))}
            isLoggedIn={isLoggedIn}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(state => ({
}))(PublicRoutes);
