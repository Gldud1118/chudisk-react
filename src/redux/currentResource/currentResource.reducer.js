import currentResourceActionTypes from './currentResource.types';

const INITIAL_STATE = {
  resource: null,
  targetFolderId: null
};

const currentResourceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case currentResourceActionTypes.SET_CURRENT_RESOURCE:
      return {
        ...state,
        resource: action.payload
      };
    case currentResourceActionTypes.CLEAR_CURRENT_RESOURCE:
      return {
        ...state,
        resource: null
      };
    case currentResourceActionTypes.SET_TARGET_FOLDER_ID:
      return {
        ...state,
        targetFolderId: action.payload
      };
    default:
      return state;
  }
};

export default currentResourceReducer;
