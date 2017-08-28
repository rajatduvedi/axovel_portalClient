import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HrComponent } from './hr/hr.component';
import {TableComponent ,DialogConfirmDialog, DialogResultEditDialog,DialogResultUpdateUserDialog} from './table/table.component';
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
        MdListModule,
        MdDialogModule,
        MdRadioModule
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
        FormsModule,ReactiveFormsModule,
        // CdkTableModule,
        MdListModule,
        MdDialogModule,
        MdRadioModule
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
        TableComponent,
        DialogResultEditDialog,
        DialogResultUpdateUserDialog,
        DialogConfirmDialog
        // EmployeeComponent

    ],
    providers: [
        // AdminAuthGuard
    ],
    entryComponents:[DialogResultEditDialog,DialogResultUpdateUserDialog,DialogConfirmDialog]
})
export class DashBoardModule { }
