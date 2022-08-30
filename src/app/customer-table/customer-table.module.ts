import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

import { CustomerTableRoutingModule } from './customer-table-routing.module';
import { CustomerTableComponent } from './customer-table.component';
import { MatIconModule } from '@angular/material/icon';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomerTableComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    CustomerTableRoutingModule,
    MatInputModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule
  ]
})
export class CustomerTableModule { }
