import { createSelector } from 'reselect';

const selectShopy = (state) => state.shopy;

export const selectCollections = createSelector(
  [selectShopy],
  (shopy) => shopy.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
