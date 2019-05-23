import { initialState } from '../state';
import { MarksActionTypes, MarksActions } from '../actions/marks.actions';
import {ErrorMessages} from '../../constants/constants';

export function marksReducer(state = initialState, action: MarksActions) {
  switch (action.type) {
    case MarksActionTypes.LOAD_MARKS_SUCCESS: {
      return {
        ...state,
        marks: [...action.payload]
      };
    }
    case MarksActionTypes.LOAD_MARKS_FAIL: {
      return {
        ...state,
        error: ErrorMessages.LOAD_MARKS
      };
    }
    default:
      return state;
  }
}
