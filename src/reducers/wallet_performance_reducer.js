import { GET_WALLET_PERFORMANCE } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case GET_WALLET_PERFORMANCE:
      return { ...state, wallet_performance: action.payload }
      break;
    default:
      return state;
  }
}
