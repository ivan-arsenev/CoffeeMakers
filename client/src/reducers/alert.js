import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

// This is just a function that takes a peace of state and action => aciton dispath in action file
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload);

    default:
      return state;
  }
}
