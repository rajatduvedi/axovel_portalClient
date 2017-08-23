import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpAddressComponent } from './addEmpAddress.component';

const routes: Routes = [
    { path: '', component: AddEmpAddressComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmpAddressRoutingModule { }
