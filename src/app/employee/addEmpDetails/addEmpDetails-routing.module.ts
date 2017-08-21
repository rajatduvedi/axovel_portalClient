import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpDetailsComponent } from './addEmpDetails.component';

const routes: Routes = [
    { path: '', component: AddEmpDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmpDetailsRoutingModule { }
