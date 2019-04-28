import 'babel-polyfill';
// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';

import history from './router/history';

import createRoutes from './router/routes';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';

// Import root app
import App from './containers/App';

import configureStore from './store';

// Import CSS reset and Global Styles
import './global-styles';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const routes = createRoutes();
const MOUNT_NODE = document.getElementById('root');

const AppProvider = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        {routes.map((route, i) => (
          // eslint-disable-next-line
          <RouteWithSubRoutes key={i} {...route} routes={routes} />
        ))}
      </App>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(<AppProvider />, MOUNT_NODE);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
