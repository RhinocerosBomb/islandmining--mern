import React from "react";
import {Route, Redirect, Router, Switch} from "react-router-dom";
import {connect} from "react-redux";
import App from "./App";
import asyncComponent from "./helpers/AsyncFunc";
import Header from './Layout/Header'
import Body from './Layout/Body'
import Footer from './Layout/Footer'

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
        <Header/>
        <Body>
        <Switch>
          <Route
            exact
            path={"/"}
            component={asyncComponent(() => import("./Pages/Home"))}
          />
          <Route
            exact
            path={"/signup"}
            component={asyncComponent(() => import("./Pages/SignUp"))}
          />
          <Route
            exact
            path={"/login"}
            component={asyncComponent(() => import("./Pages/Login"))}
          />
          <RestrictedRoute
            path="/items"
            component={asyncComponent(() => import("./Pages/Items"))}
            isLoggedIn={isLoggedIn}
          />
        </Switch>
        </Body>
        <Footer/>
      </div>
    </Router>
  );
};

export default connect(state => ({
}))(PublicRoutes);
