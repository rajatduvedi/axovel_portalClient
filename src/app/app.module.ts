import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule,Headers } from '@angular/http';
import { AppRoutingModule } from './app.routing';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
// import { DashBoardComponent } from './dashboard/dash-board.component';
// import{LoginComponent} from './login/login.component';

import { CdkTableModule } from '@angular/cdk';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DropdownDirective } from './shared/dropdown.directive';
// import { Ng4DropdownModule } from 'ng4-material-dropdown';
// import {TableComponent} from './table/table.component'
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
        // Ng4DropdownModule

} from '@angular/material';
// import { FooterComponent } from './footer/footer.component';
// import { HeaderComponent } from './header/header.component';
// import { SidebarComponent } from './sidebar/sidebar.component';
// import { HrComponent } from './hr/hr.component';
import { UserLoginComponent } from './user-login/user-login.component';
// import { DashBoardComponent } from './dashboard/dashboard.component';
// import { Ng4DropdownModule } from 'ng4-material-dropdown';
@NgModule({
    imports:      [
        // BrowserModule,
        // DashboardModule,
        // Ng4DropdownModule,
        AppRoutingModule,
        HttpModule,
        BrowserAnimationsModule,
        MdSidenavModule,
        MdTableModule,
        MdInputModule,
        CdkTableModule,
        MdButtonModule,
        MdSelectModule,
        MdIconModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        FormsModule,
ReactiveFormsModule,
        // Ng4DropdownModule
        // SidebarModule,
        // MdSidenavModule,
        // NavbarModule,
        // FooterModule,
        // RouterModule.forRoot([
        //   { path: 'dashboard',component:DashBoardComponent },
        //   // {path:'table',component:TableComponent},
        //   // { path: 'login/:id', component: LoginComponent },
        //   // { path : 'register', component:RegisterComponent},
        // ])
    ],
    declarations: [ AppComponent,
                    DropdownDirective,
                    // DashBoardComponent,
                    // TableComponent,
                    // FooterComponent,
                    // HeaderComponent,
                    // SidebarComponent,
                    // HrComponent,
                    // TableComponent,
                    UserLoginComponent,
                    // RegisterComponent,
                    // LoginComponent,
      ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
