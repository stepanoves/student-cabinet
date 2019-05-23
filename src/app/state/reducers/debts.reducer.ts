import { initialState } from '../state';
import { DebtsActionTypes, DebtsActions } from '../actions/debts.actions';
import {ErrorMessages} from '../../constants/constants';

export function debtsReducer(state = initialState, action: DebtsActions) {
  switch (action.type) {
    case DebtsActionTypes.LOAD_DEBTS_SUCCESS: {
      return {
        ...state,
        debts: [...action.payload]
      };
    }
    case DebtsActionTypes.LOAD_DEBTS_FAIL: {
      return {
        ...state,
        error: ErrorMessages.LOAD_DEBTS
      };
    }
    default:
      return state;
  }
}
