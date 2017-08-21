import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpDOCDetailsComponent } from './addEmpDOCDetails.component';

const routes: Routes = [
    { path: '', component: AddEmpDOCDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmpDOCDetailsRoutingModule { }
