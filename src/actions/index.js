import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, TOGGLE_NAV, GET_ENDED_TRADES, GET_WALLET_PERFORMANCE } from './types';

const ROOT_URL = 'http://api-planoinvest.herokuapp.com';

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/v1/auth/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch( (response) => {
        dispatch(authError(response.response.data.error));
      });
  }
}

export function signinUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/api/v1/auth/signin`, { email, password })
      .then( response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/');
      })
      .catch((response) => {
        dispatch(authError(response.response.data.error));
      });
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function toggleNav() {
  return {
    type: TOGGLE_NAV
  }
}

export function getTrades(url) {

  return function(dispatch) {
    axios.get(url)
      .then(response => {
        dispatch({ type: GET_ENDED_TRADES, payload: response.data});
      })
      .catch((response) => {
        dispatch(authError(response.message));
      });
  }
}

export function getLineChartData(url) {
  return function(dispatch) {
    axios.get(url)
      .then(response => {
        dispatch({ type: GET_WALLET_PERFORMANCE, payload: response.data });
      })
      .catch((response) => {
        console.log(response.message);
      })
  }
}
