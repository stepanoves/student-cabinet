import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as debtsActions from '../actions/debts.actions';
import {CabinetHttpService} from '../../services/cabinet-http.service';
import {END_POINTS} from '../../config/config';
import {Debt} from '../../models';

@Injectable()
export class DebtsEffects {
  constructor(
    private actions$: Actions,
    private cabinetHttpService: CabinetHttpService,
  ) {}

  @Effect()
  loadDebts$ = this.actions$.pipe(
    ofType(debtsActions.DebtsActionTypes.LOAD_DEBTS),
    switchMap(() =>
      this.cabinetHttpService.getData(END_POINTS.GET.DEBTS).pipe(
        map(debts => new debtsActions.LoadSuccess(debts as Debt[])),
        catchError(() => of(new debtsActions.LoadFail()))
      )
    )
  );
}
