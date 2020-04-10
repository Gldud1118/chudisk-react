import { takeLatest, put, call, all } from 'redux-saga/effects';
import folderActionTypes from './folder.types';
import { apiFetchFolder } from '../../apis';
import { convertArrayToMap } from '../../utils/utils';

import { fetchFolderSuccess, fetchFolderFailure } from './folder.actions';

export function* fetchFolderAsync({ payload: folderId }) {
  if (!folderId) {
    folderId = 'root';
  }
  try {
    const response = yield call(apiFetchFolder, folderId);
    const itemsMap = yield call(convertArrayToMap, response.items);

    yield put(
      fetchFolderSuccess({
        folderId: response.folderId,
        items: itemsMap,
      })
    );
  } catch (error) {
    console.log(error);
    const { message } = error.data;
    yield put(fetchFolderFailure(message));
  }
}

export function* watchFetchFolderStart() {
  yield takeLatest(folderActionTypes.FETCH_FOLDER_START, fetchFolderAsync);
}

export function* folderSagas() {
  yield all([call(watchFetchFolderStart)]);
}
