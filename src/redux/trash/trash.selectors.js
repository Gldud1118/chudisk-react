import { createSelector } from 'reselect';

const selectTrash = state => state.trash;

export const selectTrashBox = createSelector(
  [selectTrash],
  trash => trash.resource
);

export const selectTrashBoxFetching = createSelector(
  [selectTrash],
  trash => trash.isFetching
);
