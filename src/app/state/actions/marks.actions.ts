import { Action } from '@ngrx/store';

import { Mark } from '../../models';

export enum MarksActionTypes {
  'LOAD_MARKS' = '[Marks page] Load marks',
  'LOAD_MARKS_SUCCESS' = '[Marks page] Load success marks',
  'LOAD_MARKS_FAIL' = '[Marks page] Load fail marks'
}

export class Load implements Action {
  readonly type = MarksActionTypes.LOAD_MARKS;
}

export class LoadSuccess implements Action {
  readonly type = MarksActionTypes.LOAD_MARKS_SUCCESS;

  constructor(readonly payload: Mark[]) {}
}

export class LoadFail implements Action {
  readonly type = MarksActionTypes.LOAD_MARKS_FAIL;
}

export type MarksActions =
  | Load
  | LoadSuccess
  | LoadFail;
