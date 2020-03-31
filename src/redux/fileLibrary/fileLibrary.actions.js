import fileLibraryActionTypes from './fileLibrary.types';
export const fetchFileLibraryStart = mimeType => ({
  type: fileLibraryActionTypes.FETCH_FILELIBRARY_START,
  payload: mimeType
});

export const fetchFileLibrarySuccess = data => ({
  type: fileLibraryActionTypes.FETCH_FILELIBRARY_SUCCESS,
  payload: data
});

export const fetchFileLibraryFailure = errorMessage => ({
  type: fileLibraryActionTypes.fetchFolderFailure,
  payload: errorMessage
});
