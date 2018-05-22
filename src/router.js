import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import App from 'containers';
import configureStore from './store';

const Loading = () => (<div>Loading</div>);

const Home = () => (<div>Home</div>);

const Routers = () => {
  const routes = [{
    path: '/counter',
    component: () => import('containers/counter/'),
  }, {
    path: '/login',
    component: () => import('containers/login/'),
  }];
  return (
    <Router>
      <App>
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
      </App>
    </Router>

  );
};

const store = configureStore();

const Root = () => {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
};

export default Root;
