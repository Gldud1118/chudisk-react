import starredActionTypes from './starred.types';
export const fetchStarredStart = () => ({
  type: starredActionTypes.FETCH_STARRED_START
});

export const fetchStarredSuccess = data => ({
  type: starredActionTypes.FETCH_STARRED_SUCCESS,
  payload: data
});

export const fetchStarredFailure = errorMessage => ({
  type: starredActionTypes.FETCH_STARRED_FAILURE,
  payload: errorMessage
});
