import { GET_ENDED_TRADES } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case GET_ENDED_TRADES:
      return { ...state, ended_trades: action.payload };
      break;
    default:
      return state;
  }
}
