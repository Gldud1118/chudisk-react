import authActionTypes from './auth.types';

const INITIAL_STATE = {
  currentUser: null,
  isValidated: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.SIGNIN_SUCCESS:
    case authActionTypes.SIGNUP_SUCCESS:
    case authActionTypes.CHECK_USER_SESSION_SUCCESS:
    case authActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
        isValidated: true,
        error: null,
      };
    case authActionTypes.SIGNOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isValidated: false,
        error: null,
      };
    case authActionTypes.SIGNIN_FAILURE:
    case authActionTypes.LOGOUT_FAILURE:
    case authActionTypes.SIGNUP_FAILURE:
    case authActionTypes.CHECK_USER_SESSION_FAILURE:
      return {
        ...state,
        isValidated: false,
        error: true,
      };
    default:
      return state;
  }
};

export default authReducer;
