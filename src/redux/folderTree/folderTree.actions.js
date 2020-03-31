import folderTreeActionTypes from './folderTree.types';

export const fetchFolderTreeStart = () => ({
  type: folderTreeActionTypes.FETCH_FOLDER_TREE_START
});

export const fetchFolderTreeSuccess = data => ({
  type: folderTreeActionTypes.FETCH_FOLDER_TREE_SUCCESS,
  payload: data
});

export const fetchFolderTreeFailure = errorMessage => ({
  type: folderTreeActionTypes.FETCH_FOLDER_TREE_FALIURE,
  payload: errorMessage
});
