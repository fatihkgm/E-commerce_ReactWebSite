import { createSelector } from 'reselect';

const selectShopy = (state) => state.shopy;

export const selectCollections = createSelector(
  [selectShopy],
  (shopy) => shopy.collections
);


