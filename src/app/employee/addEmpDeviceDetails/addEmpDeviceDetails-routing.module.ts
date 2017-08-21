import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpDeviceDetailsComponent } from './addEmpDeviceDetails.component';

const routes: Routes = [
    { path: '', component: AddEmpDeviceDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmpDeviceDetailsRoutingModule { }
