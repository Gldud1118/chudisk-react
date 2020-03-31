import folderTreeActionTypes from './folderTree.types';

const INITIAL_STATE = {
  treePath: {},
  isLoading: false
};

const folderTreeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case folderTreeActionTypes.FETCH_FOLDER_TREE_START:
      return { ...state, isLoading: true };
    case folderTreeActionTypes.FETCH_FOLDER_TREE_SUCCESS:
      return { ...state, isLoading: false, treePath: action.payload };
    case folderTreeActionTypes.FETCH_FOLDER_TREE_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default folderTreeReducer;
