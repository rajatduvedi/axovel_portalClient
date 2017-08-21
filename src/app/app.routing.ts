import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dashboard/dash-board.component';
// import { DashBoardComponent } from './dashboard/dashboard.component';
// import { AuthGuard } from './_guards/auth.guard';
// import { ConfirmationRedirectComponent } from './confirmation-redirect/confirmation-redirect.component';

const appRoutes: Routes = [
	// {
  //   path: 'admin',
  //   loadChildren: './admin/admin.module#AdminModule',
	// },
  { path: 'table', loadChildren: './table/table.module#TableModule' },
  { path: 'emp', loadChildren: './employee/employee.module#EmployeeModule' },
  { path: 'dashboard',component:DashBoardComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
