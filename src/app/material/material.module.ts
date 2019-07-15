import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table.component';
import {CdkTableModule} from '@angular/cdk/table';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    CdkTableModule,
    MatCardModule
  ],
  exports: [
    TableComponent
  ]
})
export class MaterialModule { }
