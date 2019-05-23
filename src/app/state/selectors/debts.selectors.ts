import { State } from '../state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const debts = createFeatureSelector('debts');

export const getDebts = createSelector(
  debts,
  (state: State) => state.debts
);
