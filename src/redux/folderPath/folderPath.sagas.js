import { takeLatest, put, call } from 'redux-saga/effects';
import folderPathActionTypes from './folderPath.types';
import {
  fetchFolderPathSuccess,
  fetchFolderPathFailure
} from './folderPath.actions';
import { apiFetchFolderPath } from '../../apis';

export function* fetchFolderPathAsync({ payload: folderId }) {
  try {
    if (!folderId) folderId = 'root';
    const response = yield call(apiFetchFolderPath, folderId);
    yield put(fetchFolderPathSuccess(response));
  } catch (error) {
    const { message } = error.data;
    yield put(fetchFolderPathFailure(message));
  }
}

export function* watchFetchFolderPathStart() {
  yield takeLatest(
    folderPathActionTypes.FETCH_FOLDER_PATH_START,
    fetchFolderPathAsync
  );
}

export function* folderPathSagas() {
  yield call(watchFetchFolderPathStart);
}
