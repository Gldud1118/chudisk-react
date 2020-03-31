import { createSelector } from 'reselect';

const selectStarred = state => state.starred;

export const selectStarredBox = createSelector(
  [selectStarred],
  starred => starred.resource
);

export const selectStarredBoxFetching = createSelector(
  [selectStarred],
  starred => starred.isFetching
);
