import {
  takeLatest,
  put,
  all,
  call,
  select,
  getContext,
} from 'redux-saga/effects';
import updatedResourceActionTypes from './updatedResource.types';
import {
  apiCreateFolder,
  apiUploadFile,
  apiChangeStarredStatus,
  apiChangeTrashedStatus,
  apiMove,
  apiDestroy,
  apiCopy,
  apiRename,
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
  changeTrashedFailure,
  restoreSuccess,
  restoreFailure,
} from './updatedResource.actions';
import { fetchFolderStart } from '../folder/folder.actions';
import { fetchFolderTreeStart } from '../folderTree/folderTree.actions';
import { fetchTrashStart } from '../trash/trash.actions';

import { selectFolderId } from '../folder/folder.selectors';

export function* createFolderAsync({ payload: { parentId, folderName } }) {
  try {
    const response = yield call(apiCreateFolder, parentId, folderName);
    yield put(createFolderSuccess(response));

    const openedFolderId = yield select(selectFolderId);
    yield put(fetchFolderStart(openedFolderId));
    yield put(fetchFolderTreeStart());
  } catch (error) {
    console.log(error);
    const { message } = error.data;
    yield put(createFolderFailure(message));
  }
}

// export function* getLocation(){
//   const history = yield getContext('history');
//   console.log(history);

//   //중요처리 해제할 때 => 중요페이지와 상관있음(일단 텍스트부터 바꾸기)
//   //만약 중요처리 => 현재폴더
//   //만약에 삭제를 하면? => 현재폴더, 최근, 중요
//복사, 이동 => 현재폴더
// }

export function* uploadFileAsync({ payload: formData }) {
  try {
    const response = yield call(apiUploadFile, formData);
    yield put(uploadFileSuccess(response));
    const openedFolderId = yield select(selectFolderId);
    yield put(fetchFolderStart(openedFolderId));
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
  payload: { resourceType, id, starred },
}) {
  try {
    const response = yield call(
      apiChangeStarredStatus,
      resourceType,
      id,
      starred
    );
    yield put(changeStarredSuccess(response));
    const openedFolderId = yield select(selectFolderId);
    yield put(fetchFolderStart(openedFolderId));
  } catch (error) {
    const { message } = error.data;
    yield put(changeStarredFailure(message));
  }
}

export function* changeTrashedAsync({ payload: { resourceType, id } }) {
  try {
    const response = yield call(apiChangeTrashedStatus, resourceType, id, true);
    yield put(changeTrashedSuccess(response));
    const openedFolderId = yield select(selectFolderId);
    yield put(fetchFolderStart(openedFolderId));
    //현재페이지가 어디인줄 알아야함
    const history = yield getContext('history');
    //console.log(history.location.pathname);
  } catch (error) {
    const { message } = error.data;
    yield put(changeTrashedFailure(message));
  }
}

function* getLocation() {
  const history = yield getContext('history');
}

export function* restoreAsync({ payload: { resourceType, id } }) {
  try {
    const response = yield call(
      apiChangeTrashedStatus,
      resourceType,
      id,
      false
    );
    yield put(restoreSuccess(response));
    yield put(fetchTrashStart());
  } catch (error) {
    const { message } = error.data;
    yield put(restoreFailure(message));
  }
}

export function* moveAsync({ payload: { resourceType, id, targetFolderId } }) {
  try {
    const response = yield call(apiMove, resourceType, id, targetFolderId);
    yield put(moveSuccess(response));
    yield put(fetchFolderStart());
  } catch (error) {
    const { message } = error.data;
    yield put(moveFailure(message));
  }
}

export function* copyAsync({ payload: { resourceType, id, targetFolderId } }) {
  try {
    const response = yield call(apiCopy, resourceType, id, targetFolderId);
    yield put(copySuccess(response));
    yield put(fetchFolderStart());
  } catch (error) {
    const { message } = error.data;
    yield put(copyFailure(message));
  }
}

export function* deleteAsync({ payload: { resourceType, id } }) {
  try {
    const response = yield call(apiDestroy, resourceType, id);
    yield put(deleteSuccess(response));
    yield put(fetchTrashStart());
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

export function* watchRestoreStart() {
  yield takeLatest(updatedResourceActionTypes.RESTORE_START, restoreAsync);
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
    call(watchDeleteStart),
    call(watchRestoreStart),
  ]);
}
