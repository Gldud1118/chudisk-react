import starredActionTypes from './starred.types';
import createReducer from '../createReducer';

const INITIAL_STATE = {
  resource: {},
  isFetching: false,
  errorMessage: undefined
};

const starredReducer = (state = INITIAL_STATE, action) =>
  createReducer(state, action, starredActionTypes, 'starred');

export default starredReducer;
