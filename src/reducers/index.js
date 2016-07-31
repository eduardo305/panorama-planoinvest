import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import navReducer from './nav_reducer';
import tradeTrackerReducer from './trade_tracker_reducer';
import walletPerformance from './wallet_performance_reducer';

const rootReducer = combineReducers({
  form: form,
  auth: authReducer,
  nav: navReducer,
  ended_trades: tradeTrackerReducer,
  walletPerformance: walletPerformance
});

export default rootReducer;
