import fileLibraryActionTypes from './fileLibrary.types';

const INITIAL_STATE = {
  mimeType: null,
  resource: [],
  isLoading: false,
  errorMessage: null
};

const fileLibraryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case fileLibraryActionTypes.FETCH_FILELIBRARY_START:
      return {
        ...state,
        isLoading: true,
        mimeType: action.payload
      };
    case fileLibraryActionTypes.FETCH_FILELIBRARY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        resource: action.payload
      };
    case fileLibraryActionTypes.FETCH_FILELIBRARY_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default fileLibraryReducer;
