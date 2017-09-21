import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule,Headers  } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { AuthGuard } from './guards/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UserLoginComponent } from './user-login/user-login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasseordComponent } from './reset-passeord/reset-passeord.component';
import { SharedModule } from './shared/shared.module';
@NgModule({
    imports:      [
                  AppRoutingModule,
                  HttpModule,
                  BrowserAnimationsModule,
                  FormsModule,
                  ReactiveFormsModule,
                  SharedModule
    ],
    declarations: [ AppComponent,
                    UserLoginComponent,
                    PageNotfoundComponent,
                    ForgotPasswordComponent,
                    ResetPasseordComponent,
      ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
       AuthGuard],
      //  exports:[SharedModule],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
