import {
  takeLatest,
  put,
  all,
  call,
  getContext,
  takeEvery,
} from 'redux-saga/effects';
import storage from '../../utils/storage';
import authActionTypes from './auth.types';
import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  checkUserSessionSuccess,
  checkUserSessionFailure,
} from './auth.actions';
import { apiSignIn, apiSignUp, apiCheck } from '../../apis/index';

export function* signUpStartAsync({ payload: userCredentials }) {
  try {
    console.log(userCredentials);
    const response = yield call(apiSignUp, userCredentials);
    yield put(signUpSuccess(response));
  } catch (error) {
    yield put(signUpFailure(error.data.message));
  }
}
export function* signInStartAsync({ payload: { email, password } }) {
  try {
    const response = yield call(apiSignIn, email, password);
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInFailure(error.data.message));
  }
}

export function* setCurrentUser({ payload: user }) {
  console.log('setcurrent user');
  yield call(storage.set, 'currentUser', user);
  const history = yield getContext('history');
  history.push('/');
}

export function* checkUserSessionAsync() {
  try {
    const response = yield call(apiCheck);
    yield put(checkUserSessionSuccess(response));
  } catch (error) {
    yield put(checkUserSessionFailure(error.data.messages));
    storage.remove('currentUser');
    window.location.href = '/signin?expired';
  }
}

export function* signOutStartAsync() {}

export function* watchLoginStart() {
  yield takeLatest(authActionTypes.SIGNIN_START, signInStartAsync);
}

export function* watchCheckUserSession() {
  yield takeLatest(
    authActionTypes.CHECK_USER_SESSION_START,
    checkUserSessionAsync
  );
}

export function* watchSignUpStart() {
  yield takeLatest(authActionTypes.SIGNUP_START, signUpStartAsync);
}

export function* watchSignOutStart() {
  yield takeLatest(authActionTypes.SIGNOUT_START, signOutStartAsync);
}

export function* watchSignUpSuccess() {
  yield takeLatest(authActionTypes.SIGNUP_SUCCESS, setCurrentUser);
}

export function* watchSignInSuccess() {
  yield takeEvery(authActionTypes.SIGNIN_SUCCESS, setCurrentUser);
}

export function* authSagas() {
  yield all([
    call(watchLoginStart),
    call(watchSignUpStart),
    call(watchSignUpSuccess),
    call(watchSignOutStart),
    call(watchCheckUserSession),
    call(watchSignInSuccess),
  ]);
}
