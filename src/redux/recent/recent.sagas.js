import { takeLatest, put, call } from 'redux-saga/effects';
import recentActionTypes from './recent.types';
import { apiFetchRecent } from '../../apis';
import { fetchRecentSuccess, fetchRecentFailure } from './recent.actions';

export function* fetchRecentAsync() {
  try {
    const response = yield call(apiFetchRecent);
    yield put(fetchRecentSuccess(response));
  } catch (error) {
    yield put(fetchRecentFailure(error));
  }
}

export function* watchRecentStart() {
  yield takeLatest(recentActionTypes.FETCH_RECENT_START, fetchRecentAsync);
}

export function* recentSagas() {
  yield call(watchRecentStart);
}
