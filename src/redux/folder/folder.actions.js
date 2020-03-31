import folderActionTypes from './folder.types';
export const fetchFolderStart = folderId => ({
  type: folderActionTypes.FETCH_FOLDER_START,
  payload: folderId
});

export const fetchFolderSuccess = data => ({
  type: folderActionTypes.FETCH_FOLDER_SUCCESS,
  payload: data
});

export const fetchFolderFailure = errorMessage => ({
  type: folderActionTypes.FETCH_FOLDER_FAILURE,
  payload: errorMessage
});
