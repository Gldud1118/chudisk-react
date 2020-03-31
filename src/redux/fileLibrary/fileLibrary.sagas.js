import fileLibraryActionTypes from './fileLibrary.types';
import { takeLatest, put, call } from 'redux-saga/effects';
import { apiFetchFileLibrary } from '../../apis';

import {
  fetchFileLibrarySuccess,
  fetchFileLibraryFailure
} from './fileLibrary.actions';

export function* fetchFileLibraryAsync({ payload: mimeType }) {
  try {
    const response = yield call(apiFetchFileLibrary, mimeType);

    yield put(fetchFileLibrarySuccess(response));
  } catch (error) {
    console.log(error);
    const { message } = error.data;
    yield put(fetchFileLibraryFailure(message));
  }
}

export function* watchFetchFileLibraryStart() {
  yield takeLatest(
    fileLibraryActionTypes.FETCH_FILELIBRARY_START,
    fetchFileLibraryAsync
  );
}

export function* fileLibrarySagas() {
  yield call(watchFetchFileLibraryStart);
}
