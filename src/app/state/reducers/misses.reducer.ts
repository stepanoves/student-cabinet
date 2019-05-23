import { initialState } from '../state';
import { MissesActionTypes, MissesActions } from '../actions/misses.actions';
import {ErrorMessages} from '../../constants/constants';

export function missesReducer(state = initialState, action: MissesActions) {
  switch (action.type) {
    case MissesActionTypes.LOAD_MISSES_SUCCESS: {
      return {
        ...state,
        misses: [...action.payload]
      };
    }
    case MissesActionTypes.LOAD_MISSES_FAIL: {
      return {
        ...state,
        error: ErrorMessages.LOAD_MISSES
      };
    }
    default:
      return state;
  }
}
