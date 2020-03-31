import recentActionTypes from './recent.types';
import createReducer from '../createReducer';

const INITIAL_STATE = {
  resource: [],
  isFetching: false,
  errorMessage: undefined
};

const recentReducer = (state = INITIAL_STATE, action) =>
  createReducer(state, action, recentActionTypes, 'recent');

export default recentReducer;
