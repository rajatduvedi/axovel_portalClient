import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpPrevCompanyDetailsComponent } from './addEmpPrevCompanyDetails.component';

const routes: Routes = [
    { path: '', component: AddEmpPrevCompanyDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEmpPrevCompanyDetailsRoutingModule { }
