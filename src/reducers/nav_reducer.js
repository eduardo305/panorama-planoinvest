import { TOGGLE_NAV } from '../actions/types';

export default function(state = { visible: false} , action) {
  switch (action.type) {
    case TOGGLE_NAV:
      return { ...state, visible: !state.visible };
      break;
    default:
      return state;
  }
}
