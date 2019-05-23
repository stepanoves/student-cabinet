import {Debt, Mark, Misses} from '../models';

export interface State {
  readonly misses: Misses[];
  readonly debts: Debt[];
  readonly marks: Mark[];
  readonly error: string;
}

export const initialState: State = {
  misses: [],
  debts: [],
  marks: [],
  error: null
};
