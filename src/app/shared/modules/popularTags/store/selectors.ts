import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AppStateInterface } from 'src/app/shared/types/appState.interface';
import { PopularTagsStateInterface } from '../types/popularTagsState.interface';

const popularTagsFeatureSelector = (state: AppStateInterface) =>
  state.popularTags;

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (feedState: PopularTagsStateInterface) => feedState.isLoading
);

export const isErrorSelector = createSelector(
  popularTagsFeatureSelector,
  (feedState: PopularTagsStateInterface) => feedState.error
);

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (feedState: PopularTagsStateInterface) => feedState.data
);
