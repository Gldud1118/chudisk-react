import folderPathActionTypes from './folderPath.types';

export const fetchFolderPathStart = folderId => ({
  type: folderPathActionTypes.FETCH_FOLDER_PATH_START,
  payload: folderId
});

export const fetchFolderPathSuccess = data => ({
  type: folderPathActionTypes.FETCH_FOLDER_PATH_SUCCESS,
  payload: data
});

export const fetchFolderPathFailure = errorMessage => ({
  type: folderPathActionTypes.FETCH_FOLDER_PATH_FAILURE,
  payload: errorMessage
});
