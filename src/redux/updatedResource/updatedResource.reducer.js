import updatedResourceActionTypes from './updatedResource.types';

const INITIAL_STATE = {
  resource: null,
  isLoading: false,
  errorMessage: null,
  actionType: null,
};

//어떤 이벤트가 진행됐는지 담아놓자?

const updatedResourceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case updatedResourceActionTypes.CREATE_FOLDER_START:
    case updatedResourceActionTypes.UPLOAD_FILE_START:
    case updatedResourceActionTypes.RENAME_START:
    case updatedResourceActionTypes.CHANGE_STARRED_START:
    case updatedResourceActionTypes.CHANGE_TRASHED_START:
    case updatedResourceActionTypes.MOVE_START:
    case updatedResourceActionTypes.COPY_START:
    case updatedResourceActionTypes.DELETE_START:
    case updatedResourceActionTypes.RESTORE_START:
      return {
        ...state,
        isLoading: true,
      };
    case updatedResourceActionTypes.CREATE_FOLDER_SUCCESS:
    case updatedResourceActionTypes.UPLOAD_FILE_SUCCESS:
    case updatedResourceActionTypes.RENAME_SUCCESS:
    case updatedResourceActionTypes.CHANGE_STARRED_SUCCESS:
    case updatedResourceActionTypes.CHANGE_TRASHED_SUCCESS:
    case updatedResourceActionTypes.MOVE_SUCCESS:
    case updatedResourceActionTypes.COPY_SUCCESS:
    case updatedResourceActionTypes.DELETE_SUCCESS:
    case updatedResourceActionTypes.RESTORE_SUCCESS:
      return {
        ...state,
        resource: action.payload,
        isLoading: false,
        actionType: action.type,
      };
    case updatedResourceActionTypes.CREATE_FOLDER_FAILURE:
    case updatedResourceActionTypes.UPLOAD_FILE_FAILURE:
    case updatedResourceActionTypes.RENAME_FAILURE:
    case updatedResourceActionTypes.CHANGE_STARRED_FAILURE:
    case updatedResourceActionTypes.CHANGE_TRASHED_FAILURE:
    case updatedResourceActionTypes.MOVE_FAILURE:
    case updatedResourceActionTypes.COPY_FAILURE:
    case updatedResourceActionTypes.DELETE_FAILURE:
    case updatedResourceActionTypes.RESTORE_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default updatedResourceReducer;
