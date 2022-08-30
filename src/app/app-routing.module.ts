import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:"",
  loadChildren:()=>import('../app/user-form/user-form.module').then(m=>m.UserFormModule)
},
{
path:"customer",
loadChildren:()=>import('../app/customer-table/customer-table.module').then(m=>m.CustomerTableModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
