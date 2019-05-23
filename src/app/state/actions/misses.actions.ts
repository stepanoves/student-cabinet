import { Action } from '@ngrx/store';

import { Misses } from '../../models';

export enum MissesActionTypes {
  'LOAD_MISSES' = '[Misses page] Load misses',
  'LOAD_MISSES_SUCCESS' = '[Misses page] Load success misses',
  'LOAD_MISSES_FAIL' = '[Misses page] Load fail misses'
}

export class Load implements Action {
  readonly type = MissesActionTypes.LOAD_MISSES;
}

export class LoadSuccess implements Action {
  readonly type = MissesActionTypes.LOAD_MISSES_SUCCESS;

  constructor(readonly payload: Misses[]) {}
}

export class LoadFail implements Action {
  readonly type = MissesActionTypes.LOAD_MISSES_FAIL;
}

export type MissesActions =
  | Load
  | LoadSuccess
  | LoadFail;
