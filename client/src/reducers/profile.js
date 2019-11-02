import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE } from '../actions/types';

const initialState = {
  profile: null, // individual page
  profiles: [], // list of profiles on pages
  repos: [], //list of github repos
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE: // that what we declared in action, by axax request took response with payload => send it by async dispatch
      return {
        ...state, // return current state => redux will compare and check what data extualy changed
        profile: payload, // so prifile changed, reducer will return current and new profile data
        loading: false // loading of this event done
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: null,
        loading: false
      };
    default:
      return state;
  }
}
