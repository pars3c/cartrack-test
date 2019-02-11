import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    baseUrl,
  } from '../constants';

export const fetchUsersBegin = () => ({
  type: FETCH_USERS_BEGIN
});

export const fetchUsersSuccess = data => ({
  type: FETCH_USERS_SUCCESS,
  payload: data,
});

export const fetchUsersFailure = error => ({
  type: FETCH_USERS_FAILURE,
  payload: error
});



// Normalizes the url for get method
export function normalizeUrlParams(params = {}) {
    return Object.keys(params).filter((f) => params[f]).map((m) => `${m}=${params[m]}`).join('&');
  }

export function fetchUsers(params = {}) {
return dispatch => {
    dispatch(fetchUsersBegin());
    console.log(`Main Url: ${baseUrl}?${normalizeUrlParams(params)}`);
    return fetch(`${baseUrl}?${normalizeUrlParams(params)}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
          }
    })
    .then(handleErrors)
    .then(res => res.json())
    .then(json => {
        dispatch(fetchUsersSuccess(json));
        console.log('worked', json)
        return json;
    })
    .catch(error => {
        dispatch(fetchUsersFailure(error))
    });
};
}


  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }