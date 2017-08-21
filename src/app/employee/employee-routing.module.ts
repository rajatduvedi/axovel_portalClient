import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../_guards/auth.guard';

import { EmployeeComponent } from './employee.component';
// import { AdminAuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
	    path: '', component: EmployeeComponent ,
	    children: [
	    // 	{ path: 'login', loadChildren: './login/login.module#LoginModule' },
	    	{ path: 'add', loadChildren: './addEmpDetails/addEmpDetails.module#AddEmpDetailsModule'},
        { path: 'add-step2', loadChildren: './addEmpAddress/addEmpAddress.module#AddEmpAddressModule'},
        { path: 'add-step3', loadChildren: './addEmpPrevCompanyDetails/addEmpPrevCompanyDetails.module#AddEmpPrevCompanyDetailsModule'},
        { path: 'add-step4', loadChildren: './addEmpDeviceDetails/addEmpDeviceDetails.module#AddEmpDeviceDetailsModule'},
        { path: 'add-step5', loadChildren: './addEmpDOCDetails/addEmpDOCDetails.module#AddEmpDOCDetailsModule'},
      ]
},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployeeRoutingModule { }
