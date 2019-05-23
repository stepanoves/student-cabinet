import {ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Store} from '@ngrx/store';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {Column, ModelType} from '../../constants/constants';
import {State} from '../../state/state';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableComponent implements OnInit, OnDestroy {

  @Input() cols: Column[];
  @Input() actionType: any;
  @Input() stream$: Observable<any>;

  @ViewChild(MatPaginator) matPaginator: MatPaginator;

  private readonly destroy$ = new Subject<boolean>();

  public dataSource = new MatTableDataSource<ModelType> ();

  public ngOnInit(): void {
    this.cols = [...this.cols];
    this.dataSource.paginator = this.matPaginator;

    this.stream$
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => (this.dataSource.data = data));
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public getHeaderRowDef(): string[] {
    return this.cols.map(col => col.key);
  }
}
