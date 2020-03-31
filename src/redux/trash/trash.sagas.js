import { takeLatest, put, call } from 'redux-saga/effects';
import trashActionTypes from './trash.types';
import { apiFetchTrashed } from '../../apis';
import { convertArrayToMap } from '../../utils/utils';
import { fetchTrashSuccess, fetchTrashFailure } from './trash.actions';

export function* fetchTrashAsync() {
  try {
    const response = yield call(apiFetchTrashed);
    const itemsMap = yield call(convertArrayToMap, response);
    yield put(fetchTrashSuccess(itemsMap));
  } catch (error) {
    yield put(fetchTrashFailure(error));
  }
}

export function* watchTrashStart() {
  yield takeLatest(trashActionTypes.FETCH_TRASH_START, fetchTrashAsync);
}

export function* trashSagas() {
  yield call(watchTrashStart);
}
