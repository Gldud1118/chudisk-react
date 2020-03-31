import updatedResourceActionTypes from './updatedResource.types';

export const createFolderStart = ({ parentId, folderName }) => ({
  type: updatedResourceActionTypes.CREATE_FOLDER_START,
  payload: { parentId, folderName }
});

export const createFolderSuccess = data => ({
  type: updatedResourceActionTypes.CREATE_FOLDER_SUCCESS,
  payload: data
});

export const createFolderFailure = errorMessage => ({
  type: updatedResourceActionTypes.CREATE_FOLDER_FAILURE,
  payload: errorMessage
});

export const uploadFileStart = ({ formData }) => ({
  type: updatedResourceActionTypes.UPLOAD_FILE_START,
  payload: formData
});

export const uploadFileSuccess = data => ({
  type: updatedResourceActionTypes.UPLOAD_FILE_SUCCESS,
  payload: data
});

export const uploadFileFailure = errorMessage => ({
  type: updatedResourceActionTypes.UPLOAD_FILE_FAILURE,
  payload: errorMessage
});

export const renameStart = ({ resourceType, id, newName }) => ({
  type: updatedResourceActionTypes.RENAME_START,
  payload: { resourceType, id, newName }
});

export const renameSuccess = data => ({
  type: updatedResourceActionTypes.RENAME_SUCCESS,
  payload: data
});

export const renameFailure = errorMessage => ({
  type: updatedResourceActionTypes.RENAME_FAILURE,
  payload: errorMessage
});

export const changeStarredStart = ({ resourceType, id, starred }) => ({
  type: updatedResourceActionTypes.CHANGE_STARRED_START,
  payload: { resourceType, id, starred }
});

export const changeStarredSuccess = data => ({
  type: updatedResourceActionTypes.CHANGE_STARRED_SUCCESS,
  payload: data
});

export const changeStarredFailure = errorMessage => ({
  type: updatedResourceActionTypes.CHANGE_STARRED_FAILURE,
  payload: errorMessage
});

export const changeTrashedStart = ({ resourceType, id, trashed }) => ({
  type: updatedResourceActionTypes.CHANGE_TRASHED_START,
  payload: { resourceType, id, trashed }
});

export const changeTrashedSuccess = data => ({
  type: updatedResourceActionTypes.CHANGE_TRASHED_SUCCESS,
  payload: data
});

export const changeTrashedFailure = errorMessage => ({
  type: updatedResourceActionTypes.CHANGE_TRASHED_FAILURE,
  payload: errorMessage
});

export const moveStart = ({ resourceType, id, targetFolderId }) => ({
  type: updatedResourceActionTypes.MOVE_START,
  payload: { resourceType, id, targetFolderId }
});

export const moveSuccess = data => ({
  type: updatedResourceActionTypes.MOVE_SUCCESS,
  payload: data
});

export const moveFailure = errorMessage => ({
  type: updatedResourceActionTypes.MOVE_FAILURE,
  payload: errorMessage
});

export const copyStart = ({ resourceType, id, targetFolderId }) => ({
  type: updatedResourceActionTypes.COPY_START,
  payload: { resourceType, id, targetFolderId }
});

export const copySuccess = data => ({
  type: updatedResourceActionTypes.COPY_SUCCESS,
  payload: data
});

export const copyFailure = errorMessage => ({
  type: updatedResourceActionTypes.COPY_FAILURE,
  payload: errorMessage
});

export const deleteStart = ({ resourceType, id }) => ({
  type: updatedResourceActionTypes.DELETE_START,
  payload: { resourceType, id }
});

export const deleteSuccess = data => ({
  type: updatedResourceActionTypes.DELETE_SUCCESS,
  payload: data
});

export const deleteFailure = errorMessage => ({
  type: updatedResourceActionTypes.DELETE_FAILURE,
  payload: errorMessage
});
