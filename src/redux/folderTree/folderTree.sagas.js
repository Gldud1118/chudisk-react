import { takeLatest, put, all, call } from 'redux-saga/effects';
import folderTreeActionTypes from './folderTree.types';
import {
  fetchFolderTreeSuccess,
  fetchFolderTreeFailure
} from './folderTree.actions';
import { apiFetchFolderTree } from '../../apis';

export function* fetchFolderTreeAsync() {
  try {
    const response = yield call(apiFetchFolderTree);
    yield put(fetchFolderTreeSuccess(response));
  } catch (error) {
    const { message } = error.data;
    yield put(fetchFolderTreeFailure(message));
  }
}

export function* watchFolderTreeStart() {
  yield takeLatest(
    folderTreeActionTypes.FETCH_FOLDER_TREE_START,
    fetchFolderTreeAsync
  );
}

export function* folderTreeSagas() {
  yield call(watchFolderTreeStart);
}
