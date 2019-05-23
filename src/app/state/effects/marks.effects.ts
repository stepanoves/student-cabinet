import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';

import * as marksActions from '../actions/marks.actions';
import {CabinetHttpService} from '../../services/cabinet-http.service';
import {END_POINTS} from '../../config/config';
import {Mark} from '../../models';

@Injectable()
export class MarksEffects {
  constructor(
    private actions$: Actions,
    private cabinetHttpService: CabinetHttpService,
  ) {}

  @Effect()
  loadMarks$ = this.actions$.pipe(
    ofType(marksActions.MarksActionTypes.LOAD_MARKS),
    switchMap(() =>
      this.cabinetHttpService.getData(END_POINTS.GET.MARKS).pipe(
        map(marks => new marksActions.LoadSuccess(marks as Mark[])),
        catchError(() => of(new marksActions.LoadFail()))
      )
    )
  );
}
