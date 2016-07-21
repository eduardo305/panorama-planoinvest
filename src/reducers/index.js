import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import navReducer from './nav_reducer';

const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  nav: navReducer
});

export default rootReducer;
