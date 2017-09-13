import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ UserLoginComponent } from './user-login/user-login.component';
import { AuthGuard } from './guards/auth.guard';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasseordComponent } from './reset-passeord/reset-passeord.component';
const appRoutes: Routes = [
  // otherwise redirect to dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard',loadChildren: './dashboard/dashboard.module#DashBoardModule', canActivate: [AuthGuard]},
  { path: 'login',component:UserLoginComponent},
  { path: 'forgot-password',component:ForgotPasswordComponent},
  { path: 'reset-password',component:ResetPasseordComponent},
  // if page is not found
  { path:'**' , component: PageNotfoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
    // providers: [AuthGuard]
})
export class AppRoutingModule { }
