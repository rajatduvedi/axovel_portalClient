import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule,Headers  } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { AuthGuard } from './guards/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DropdownDirective } from './shared/dropdown.directive';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {MdSidenavModule,
        MdTableModule,
        MdInputModule,
        MdButtonModule,
        MdSelectModule,
        MdIconModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdCheckboxModule

} from '@angular/material';
import { UserLoginComponent } from './user-login/user-login.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasseordComponent } from './reset-passeord/reset-passeord.component';
@NgModule({
    imports:      [
        AppRoutingModule,
        HttpModule,
        BrowserAnimationsModule,
        MdSidenavModule,
        MdTableModule,
        MdInputModule,
        MdButtonModule,
        MdSelectModule,
        MdIconModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        FormsModule,
        ReactiveFormsModule,
        MdCheckboxModule
    ],
    declarations: [ AppComponent,
                    DropdownDirective,
                    UserLoginComponent,
                    PageNotfoundComponent,
                    ForgotPasswordComponent,
                    ResetPasseordComponent,
      ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy},
          // {
          //   provide: XSRFStrategy,
          //   useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
          // },
       AuthGuard],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
