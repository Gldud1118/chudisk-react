import authActionTypes from './auth.types';

export const signInStart = (emailAndPassword) => ({
  type: authActionTypes.SIGNIN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (data) => ({
  type: authActionTypes.SIGNIN_SUCCESS,
  payload: data,
});

export const setCurrentUser = (user) => ({
  type: authActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const signInFailure = (error) => ({
  type: authActionTypes.SIGNIN_FAILURE,
  payload: error,
});

export const checkUserSessionStart = () => ({
  type: authActionTypes.CHECK_USER_SESSION_START,
});

export const checkUserSessionSuccess = (data) => ({
  type: authActionTypes.CHECK_USER_SESSION_SUCCESS,
  payload: data,
});

export const checkUserSessionFailure = () => ({
  type: authActionTypes.CHECK_USER_SESSION_FAILURE,
});

export const signOutStart = () => ({
  type: authActionTypes.SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: authActionTypes.LOGOUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: authActionTypes.LOGOUT_FAILURE,
  payload: error,
});

export const signUpStart = (userCredentials) => ({
  type: authActionTypes.SIGNUP_START,
  payload: userCredentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: authActionTypes.SIGNUP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: authActionTypes.SIGNUP_FAILURE,
  payload: error,
});
