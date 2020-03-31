import folderActionTypes from './folder.types';
import createReducer from '../createReducer';

const INITIAL_STATE = {
  resource: { folderId: null, items: {} },
  isFetching: false,
  errorMessage: undefined
};

const folderReducer = (state = INITIAL_STATE, action) =>
  createReducer(state, action, folderActionTypes, 'folder');

export default folderReducer;
