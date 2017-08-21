import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing';

import { AppComponent }   from './app.component';
import { DashBoardComponent } from './dashboard/dash-board.component';

import { CdkTableModule } from '@angular/cdk';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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


} from '@angular/material';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HrComponent } from './hr/hr.component';
// import { DashBoardComponent } from './dashboard/dashboard.component';
// import { Ng4DropdownModule } from 'ng4-material-dropdown';
@NgModule({
    imports:      [
        // BrowserModule,
        // DashboardModule,
        // Ng4DropdownModule,
        AppRoutingModule,
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
                    DashBoardComponent,
                    // TableComponent,
                    FooterComponent,
                    HeaderComponent,
                    SidebarComponent,
                    HrComponent,
                    // RegisterComponent,
                    // LoginComponent,
      ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
