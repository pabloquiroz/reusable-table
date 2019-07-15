import { DataService } from './data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PeriodicElement } from './data.model';

@Component({
  selector: 'app-root',
  template: `
    <app-table
    [data]="data"
    [columns]="columnsTable"
    ></app-table>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'demo';
  columnsTable: any[];
  data: Observable<PeriodicElement[]>;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.columnsTable = this.dataService.columnTableCustomers;
    this.data = this.dataService.getData();
  }
}
