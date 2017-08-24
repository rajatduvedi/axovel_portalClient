import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../_guards/auth.guard';

import { DashBoardComponent } from './dash-board.component';
import { HrComponent } from './hr/hr.component';
import {TableComponent} from './table/table.component';
// import { AdminAuthGuard } from './shared/guard/auth.guard';
// import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
    {
	    path: '', component: DashBoardComponent ,

  	    // path: 'emp', component: EmployeeComponent ,
  	    children: [
  	    	// { path: 'emp', loadChildren: '../employee/employee.module#EmployeeModule' },
  	    	{ path: 'add', loadChildren: './employee/addEmpDetails/addEmpDetails.module#AddEmpDetailsModule'},
          { path: 'add-step2', loadChildren: './employee/addEmpAddress/addEmpAddress.module#AddEmpAddressModule'},
          { path: 'add-step3', loadChildren: './employee/addEmpPrevCompanyDetails/addEmpPrevCompanyDetails.module#AddEmpPrevCompanyDetailsModule'},
          { path: 'add-step4', loadChildren: './employee/addEmpDeviceDetails/addEmpDeviceDetails.module#AddEmpDeviceDetailsModule'},
          { path: 'add-step5', loadChildren: './employee/addEmpDOCDetails/addEmpDOCDetails.module#AddEmpDOCDetailsModule'},
          { path: 'list', component:TableComponent },

        ]
      },{path: 'hr', component:HrComponent},
  // },{
  //   path: 'hr', loadChildren:'./hr/hr.component#HrComponent'
  // }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashBoardRoutingModule { }
