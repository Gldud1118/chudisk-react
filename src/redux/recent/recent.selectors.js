import { createSelector } from 'reselect';

const selectRecent = state => state.recent;

export const selectRecentBox = createSelector(
  [selectRecent],
  recent => recent.resource
);

export const selectRecentBoxFetching = createSelector(
  [selectRecent],
  recent => recent.isFetching
);
