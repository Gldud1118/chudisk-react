import { takeLatest, put, all, call } from 'redux-saga/effects';
import updatedResourceActionTypes from './updatedResource.types';
import {
  apiCreateFolder,
  apiUploadFile,
  apiChangeStarredStatus,
  apiChangeTrashedStatus,
  apiMove,
  apiDestroy,
  apiCopy,
  apiRename
} from '../../apis';

import {
  createFolderSuccess,
  createFolderFailure,
  uploadFileSuccess,
  uploadFileFailure,
  renameSuccess,
  renameFailure,
  changeStarredSuccess,
  changeStarredFailure,
  moveSuccess,
  moveFailure,
  copySuccess,
  copyFailure,
  deleteSuccess,
  deleteFailure,
  changeTrashedSuccess,
  changeTrashedFailure
} from './updatedResource.actions';

export function* createFolderAsync({ payload: { parentId, folderName } }) {
  try {
    const response = yield call(apiCreateFolder, parentId, folderName);
    yield put(createFolderSuccess(response));
  } catch (error) {
    console.log(error);
    const { message } = error.data;
    yield put(createFolderFailure(message));
  }
}

export function* uploadFileAsync({ payload: formData }) {
  try {
    const response = yield call(apiUploadFile, formData);
    yield put(uploadFileSuccess(response));
  } catch (error) {
    const { message } = error.data;
    yield put(uploadFileFailure(message));
  }
}

export function* renameAsync({ payload: { resourceType, id, newName } }) {
  try {
    const response = yield call(apiRename, resourceType, id, newName);
    yield put(renameSuccess(response));
  } catch (error) {
    const { message } = error.data;
    yield put(renameFailure(message));
  }
}

export function* changeStarredAsync({
  payload: { resourceType, id, starred }
}) {
  console.log(resourceType);
  console.log(id);
  console.log(starred);

  try {
    const response = yield call(
      apiChangeStarredStatus,
      resourceType,
      id,
      starred
    );
    yield put(changeStarredSuccess(response));
  } catch (error) {
    const { message } = error.data;
    yield put(changeStarredFailure(message));
  }
}

export function* changeTrashedAsync({
  payload: { resourceType, id, trashed }
}) {
  try {
    const response = yield call(
      apiChangeTrashedStatus,
      resourceType,
      id,
      trashed
    );
    yield put(changeTrashedSuccess(response));
  } catch (error) {
    const { message } = error.data;
    yield put(changeTrashedFailure(message));
  }
}

export function* moveAsync({ resourceType, id, targetFolderId }) {
  try {
    const response = yield call(apiMove, resourceType, id, targetFolderId);
    yield put(moveSuccess(response));
  } catch (error) {
    const { message } = error.data;
    yield put(moveFailure(message));
  }
}

export function* copyAsync({ resourceType, id, targetFolderId }) {
  try {
    const response = yield call(apiCopy, resourceType, id, targetFolderId);
    yield put(copySuccess(response));
  } catch (error) {
    const { message } = error.data;
    yield put(copyFailure(message));
  }
}

export function* deleteAsync({ resourceType, id }) {
  try {
    const response = yield call(apiDestroy, resourceType, id);
    yield put(deleteSuccess(response));
  } catch (error) {
    const { message } = error.data;
    yield put(deleteFailure(message));
  }
}

export function* watchCreateFolderStart() {
  yield takeLatest(
    updatedResourceActionTypes.CREATE_FOLDER_START,
    createFolderAsync
  );
}

export function* watchUploadFileStart() {
  yield takeLatest(
    updatedResourceActionTypes.UPLOAD_FILE_START,
    uploadFileAsync
  );
}

export function* watchRenameStart() {
  yield takeLatest(updatedResourceActionTypes.RENAME_START, renameAsync);
}

export function* watchChangeStarredStart() {
  yield takeLatest(
    updatedResourceActionTypes.CHANGE_STARRED_START,
    changeStarredAsync
  );
}

export function* watchChangeTrashedStart() {
  yield takeLatest(
    updatedResourceActionTypes.CHANGE_TRASHED_START,
    changeTrashedAsync
  );
}

export function* watchMoveStart() {
  yield takeLatest(updatedResourceActionTypes.MOVE_START, moveAsync);
}

export function* watchCopyStart() {
  yield takeLatest(updatedResourceActionTypes.COPY_START, copyAsync);
}

export function* watchDeleteStart() {
  yield takeLatest(updatedResourceActionTypes.DELETE_START, deleteAsync);
}

export function* updatedResourceSagas() {
  yield all([
    call(watchCreateFolderStart),
    call(watchUploadFileStart),
    call(watchRenameStart),
    call(watchChangeStarredStart),
    call(watchChangeTrashedStart),
    call(watchMoveStart),
    call(watchCopyStart),
    call(watchDeleteStart)
  ]);
}
