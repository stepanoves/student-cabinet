import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../state/state';
import {getCompleteMisses, getIncompleteMisses} from '../../state/selectors/misses.selectors';
import {Column, TableColumnTitles} from '../../constants/constants';
import * as missesActions from '../../state/actions/misses.actions';
import {FormControl} from '@angular/forms';;
import {takeUntil, tap} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-misses',
  templateUrl: './misses.component.html',
  styleUrls: ['./misses.component.scss']
})
export class MissesComponent implements OnInit, OnDestroy {
  public misses$ = this.store.select(getCompleteMisses);
  public columns: Column[] = TableColumnTitles.missesIncomplete;
  public complete: FormControl;
  private destroy$ = new Subject();
  constructor(private store: Store<State>) {
    this.complete = new FormControl();
  }

  public ngOnInit(): void {
    this.store.dispatch(new missesActions.Load());
    this.complete.valueChanges
      .pipe(
        tap(value => {
          if (value) {
            this.columns = TableColumnTitles.missesComplete;
            this.misses$ = this.store.select(getCompleteMisses);
          } else {
            this.columns = TableColumnTitles.missesIncomplete;
            this.misses$ = this.store.select(getIncompleteMisses);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
