import { createSelector } from 'reselect';

const selectFolder = (state) => state.folder;

export const selectFolderBox = createSelector(
  [selectFolder],
  (folder) => folder.resource
);

export const selectFolderId = createSelector(
  [selectFolderBox],
  (resource) => resource.folderId
);

export const selectFolderBoxFetching = createSelector(
  [selectFolder],
  (folder) => folder.isFetching
);
