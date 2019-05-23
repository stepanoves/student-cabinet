import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Column, TableColumnTitles} from '../../constants/constants';
import {Store} from '@ngrx/store';
import {State} from '../../state/state';
import {getMarks} from '../../state/selectors/marks.selectors';
import * as marksActions from '../../state/actions/marks.actions';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarksComponent implements OnInit {
  public marks$ = this.store.select(getMarks);
  public columns: Column[] = TableColumnTitles.marks;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(new marksActions.Load());
  }
}
