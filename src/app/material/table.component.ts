import { Component, Input, OnChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, of } from 'rxjs';
import { catchError  } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  template: `
    <mat-card>
      <mat-card-title>
        Reusable Table
      </mat-card-title>
      <mat-card-content>
        <div class="container mat-elevation-z8">
          <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">
            <ng-container *ngFor="let column of columns" [cdkColumnDef]="column.columnDef">
              <mat-header-cell cdk-header-cell *cdkHeaderCellDef>{{ column.header }}</mat-header-cell>
              <mat-cell *cdkCellDef="let row">{{ column.cell(row) }}</mat-cell>
              <td mat-cell *matCellDef="let data"></td>
            </ng-container>
            <mat-header-row *cdkHeaderRowDef="displayedColumns"></mat-header-row>
            <mat-row *cdkRowDef="let row; columns: displayedColumns;"></mat-row>
          </table>
        </div>
      </mat-card-content>
    </mat-card>

  `,
  styles: [`
    table {
      width: 100%;
    }
  `]
})
export class TableComponent implements OnChanges {
  @Input() columns: any[];
  @Input() data: Observable<any[]>;
  dataSource = new MatTableDataSource<any>();
  displayedColumns: any[];

  ngOnChanges() {
    this.data.subscribe(data => {
      this.dataSource.data = data;
      this.displayedColumns = this.columns.map(c => c.columnDef);
    }, catchError(err => of(`Error: ${err}`))
    );
  }
}
