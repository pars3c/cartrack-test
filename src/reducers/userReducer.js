import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from '../constants';
  
  const initialState = {
    users: [],
    loading: false,
    error: null
  };
  
function users(state = initialState, payload) {
  switch(payload.type) {
    case FETCH_USERS_BEGIN:

      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload.payload
      };

    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.payload,
        
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}

export default users;