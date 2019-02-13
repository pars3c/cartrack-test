import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_CHOSEN_ONE_BEGIN,
    FETCH_CHOSEN_ONE__SUCCESS,
    FETCH_CHOSEN_ONE_FAILURE,

  } from '../constants';
  
  const initialState = {
    users: [],
    chosenOne: [],
    loading: false,
    error: null
  };
  

  export function chosenOne(state = initialState, payload) {
    switch(payload.type) {
      case FETCH_CHOSEN_ONE_BEGIN:
  
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_CHOSEN_ONE__SUCCESS:
        return {
          ...state,
          loading: false,
          chosenOne: payload.payload
        };
  
      case FETCH_CHOSEN_ONE_FAILURE:
        return {
          ...state,
          loading: false,
          error: payload.payload,
          
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  };


  export function users(state = initialState, payload) {
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

