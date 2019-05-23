import { Action } from '@ngrx/store';

import { Debt } from '../../models';

export enum DebtsActionTypes {
  'LOAD_DEBTS' = '[Debts page] Load debts',
  'LOAD_DEBTS_SUCCESS' = '[Debts page] Load success debts',
  'LOAD_DEBTS_FAIL' = '[Debts page] Load fail debts'
}

export class Load implements Action {
  readonly type = DebtsActionTypes.LOAD_DEBTS;
}

export class LoadSuccess implements Action {
  readonly type = DebtsActionTypes.LOAD_DEBTS_SUCCESS;

  constructor(readonly payload: Debt[]) {}
}

export class LoadFail implements Action {
  readonly type = DebtsActionTypes.LOAD_DEBTS_FAIL;
}

export type DebtsActions =
  | Load
  | LoadSuccess
  | LoadFail;
