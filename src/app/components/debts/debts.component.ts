import { Component, OnInit } from '@angular/core';
import {getMarks} from '../../state/selectors/marks.selectors';
import {Column, TableColumnTitles} from '../../constants/constants';
import {Store} from '@ngrx/store';
import {State} from '../../state/state';
import * as debtsActions from '../../state/actions/debts.actions';
import {getDebts} from '../../state/selectors/debts.selectors';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss']
})
export class DebtsComponent implements OnInit {

  public debts$ = this.store.select(getDebts);
  public columns: Column[] = TableColumnTitles.debts;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(new debtsActions.Load());
  }

}
