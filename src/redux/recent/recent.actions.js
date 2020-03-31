import recentActionTypes from './recent.types';
export const fetchRecentStart = () => ({
  type: recentActionTypes.FETCH_RECENT_START
});

export const fetchRecentSuccess = data => ({
  type: recentActionTypes.FETCH_RECENT_SUCCESS,
  payload: data
});

export const fetchRecentFailure = errorMessage => ({
  type: recentActionTypes.FETCH_RECENT_FAILURE,
  payload: errorMessage
});
