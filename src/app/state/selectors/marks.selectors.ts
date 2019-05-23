import { State } from '../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const marks = createFeatureSelector('marks');

export const getMarks = createSelector(
  marks,
  (state: State) => state.marks
);
