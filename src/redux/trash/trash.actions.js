import trashActionTypes from './trash.types';
export const fetchTrashStart = () => ({
  type: trashActionTypes.FETCH_TRASH_START
});

export const fetchTrashSuccess = data => ({
  type: trashActionTypes.FETCH_TRASH_SUCCESS,
  payload: data
});

export const fetchTrashFailure = errorMessage => ({
  type: trashActionTypes.FETCH_TRASH_FAILURE,
  payload: errorMessage
});
