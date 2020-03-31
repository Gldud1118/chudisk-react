import currentResourceActionTypes from './currentResource.types';

export const setCurrentResource = resource => ({
  type: currentResourceActionTypes.SET_CURRENT_RESOURCE,
  payload: resource
});

export const setTargetFolderId = id => ({
  type: currentResourceActionTypes.SET_TARGET_FOLDER_ID,
  payload: id
});

export const clearCurrentResource = () => ({
  type: currentResourceActionTypes.CLEAR_CURRENT_RESOURCE
});
