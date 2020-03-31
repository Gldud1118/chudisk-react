import folderPathActionTypes from './folderPath.types';

const INITIAL_STATE = {
  path: [],
  isLoading: false
};

const folderPathReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case folderPathActionTypes.FETCH_FOLDER_PATH_START:
      return { ...state, isLoading: true };
    case folderPathActionTypes.FETCH_FOLDER_PATH_SUCCESS:
      return { ...state, isLoading: false, path: action.payload };
    case folderPathActionTypes.FETCH_FOLDER_PATH_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default folderPathReducer;
