import trashActionTypes from './trash.types';
import createReducer from '../createReducer';

const INITIAL_STATE = {
  resource: {},
  isFetching: false,
  errorMessage: undefined
};

const trashReducer = (state = INITIAL_STATE, action) =>
  createReducer(state, action, trashActionTypes, 'trash');

export default trashReducer;
