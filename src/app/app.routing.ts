import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashBoardComponent } from './dashboard/dash-board.component';
import{UserLoginComponent} from './user-login/user-login.component';

// import { DashBoardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
// import { ConfirmationRedirectComponent } from './confirmation-redirect/confirmation-redirect.component';

const appRoutes: Routes = [
	// {
  //   path: 'admin',
  //   loadChildren: './admin/admin.module#AdminModule',
	// },

  // { path: 'emp', loadChildren: './employee/employee.module#EmployeesModule'},
  { path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashBoardModule', canActivate: [AuthGuard]},
  { path: 'login',component:UserLoginComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    // providers: [AuthGuard]
})
export class AppRoutingModule { }
