import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserFormComponent } from './user-form.component';
import { CustomerTableComponent } from '../customer-table/customer-table.component';


const routes: Routes = [
  {
    path:"",
    component:UserFormComponent
  }
  // {
  //   path:"customer-table",
  //   component:CustomerTableComponent
  // }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserFormRoutingModule { }
