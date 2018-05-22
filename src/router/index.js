import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => (<div>Loading</div>);

const Home = () => (<div>Home</div>);

const Routers = () => {
  const routes = [{
    path: '/counter',
    component: () => import('containers/counter/'),
  }];
  return (
    <Switch>
      <Route exact
        path="/"
        render={() => (
          <Redirect to="/home" />
          )}
      />
      <Route exact path="/home" component={Home} />
      {
          routes.map((item, index) => {
            return (
              <Route
                exact
                key={index}
                path={item.path}
                component={Loadable({
                  loader: item.component,
                  loading: Loading,
                })}
              />
            );
          })
        }
    </Switch>
  );
};

export default Routers;
