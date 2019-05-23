import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as missesActions from '../actions/misses.actions';
import {CabinetHttpService} from '../../services/cabinet-http.service';
import {END_POINTS} from '../../config/config';
import {Misses} from '../../models';

@Injectable()
export class MissesEffects {
  constructor(
    private actions$: Actions,
    private cabinetHttpService: CabinetHttpService,
  ) {}

  @Effect()
  loadMisses$ = this.actions$.pipe(
    ofType(missesActions.MissesActionTypes.LOAD_MISSES),
    switchMap(() =>
      this.cabinetHttpService.getData(END_POINTS.GET.MISSES).pipe(
        map(misses => new missesActions.LoadSuccess(misses as Misses[])),
        catchError(() => of(new missesActions.LoadFail()))
      )
    )
  );
}
