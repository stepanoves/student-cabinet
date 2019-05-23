import { State } from '../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const misses = createFeatureSelector('misses');

export const getCompleteMisses = createSelector(
  misses,
  (state: State) => state.misses.filter(el => el.isWorked === true)
);

export const getIncompleteMisses = createSelector(
  misses,
  (state: State) => state.misses.filter(el => el.isWorked !== true)
);
