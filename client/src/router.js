import React from 'react';
import { Route, Redirect, Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import asyncComponent from './helpers/AsyncFunc';

const RestrictedRouteWhenLoggedOut = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const RestrictedRouteWhenLoggedIn = ({
  component: Component,
  isLoggedIn,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const PublicRoutes = ({ history, isLoggedIn }) => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route
            exact
            path={'/'}
            component={asyncComponent(() => import('./Pages/Home'))}
          />
          <RestrictedRouteWhenLoggedIn
            path={'/auth'}
            isLoggedIn={isLoggedIn}
            component={asyncComponent(() => import('./Pages/Auth/Auth'))}
          />
          <RestrictedRouteWhenLoggedOut
            path="/dashboard"
            component={asyncComponent(() => import('./Pages/Dashboard'))}
            isLoggedIn={isLoggedIn}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(state => ({}))(PublicRoutes);
