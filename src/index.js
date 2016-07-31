import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Panorama from './components/panorama';

import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={ store }>
    <Router history={browserHistory}>
      // <Route path="/panorama-planoinvest" component={App}>
      <Route path="/" component={App}>
        <IndexRoute component={Panorama} />
        <Route path="signin" component={Signin} />
        <Route path="signup" component={Signup} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.wrapper'));
