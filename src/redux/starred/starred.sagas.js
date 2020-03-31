import { takeLatest, put, call } from 'redux-saga/effects';
import starredActionTypes from './starred.types';
import { convertArrayToMap } from '../../utils/utils';
import { apiFetchStarred } from '../../apis';

import { fetchStarredSuccess, fetchStarredFailure } from './starred.actions';

export function* fetchStarredAsync() {
  try {
    const response = yield call(apiFetchStarred);
    const itemsMap = yield call(convertArrayToMap, response);
    yield put(fetchStarredSuccess(itemsMap));
  } catch (error) {
    console.log(error);
    const { message } = error.data;
    yield put(fetchStarredFailure(message));
  }
}

export function* watchFetchStarredStart() {
  yield takeLatest(starredActionTypes.FETCH_STARRED_START, fetchStarredAsync);
}

export function* starredSagas() {
  yield call(watchFetchStarredStart);
}
