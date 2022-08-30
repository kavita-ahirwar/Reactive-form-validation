import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTableComponent } from './customer-table.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  {
    path:"",
    component:CustomerTableComponent
  },
  {
    path:'edit',
    component:EditComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerTableRoutingModule { }
