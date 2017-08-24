import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HrComponent } from './hr/hr.component';
import {TableComponent} from './table/table.component';
import { CdkTableModule } from '@angular/cdk';
// import { EmployeeComponent } from './employee/employee.component';
// import{EmployeeComponent }from '../employee/employee.Component';
// import { AdminAuthGuard } from './shared/guard/auth.guard';
import {MdSidenavModule,
        MdTableModule,
        MdInputModule,
        MdButtonModule,
        MdSelectModule,
        MdIconModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdListModule
        } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        // NgbDropdownModule.forRoot(),
        DashBoardRoutingModule,
        MdSidenavModule,
                MdTableModule,
                MdInputModule,
                MdButtonModule,
                MdSelectModule,
                MdIconModule,
                MdToolbarModule,
                MdMenuModule,
                MdCardModule,
                // CdkTableModule,
                MdListModule
                // RouterModule.forRoot([
                //   { path: 'emp',component:EmployeeComponent },
                //   // {path:'table',component:TableComponent},
                //   // { path: 'login/:id', component: LoginComponent },
                //   // { path : 'register', component:RegisterComponent},
                // ])

    ],
    declarations: [
        DashBoardComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        HrComponent,
        TableComponent
        // EmployeeComponent

    ],
    providers: [
        // AdminAuthGuard
    ]
})
export class DashBoardModule { }
