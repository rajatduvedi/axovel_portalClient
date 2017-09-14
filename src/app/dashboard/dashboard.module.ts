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
import{ DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import {TableComponent ,DialogConfirmDialog, DialogResultEditDialog,DialogResultUpdateUserDialog} from './table/table.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
// import { AuthGuard } from '../guards/auth.guard';
import { RoleAuthGuard } from '../guards/roleAuth.guard';
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
        MdRadioModule,
        MdAutocompleteModule,
        MdPaginatorModule,
        MdProgressSpinnerModule,
        MdDatepickerModule,
        MdExpansionModule
        } from '@angular/material';
import { SettingComponent } from './setting/setting.component';

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
        MdRadioModule,
        MdAutocompleteModule,
        MdPaginatorModule,
        MdProgressSpinnerModule,
        Ng2FilterPipeModule,
        MdDatepickerModule,
        MdExpansionModule
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
        DashboardContentComponent,
        TableComponent,
        DialogResultEditDialog,
        DialogResultUpdateUserDialog,
        DialogConfirmDialog,
        SettingComponent
        // EmployeeComponent

    ],
    providers: [
        RoleAuthGuard
    ],
    entryComponents:[DialogResultEditDialog,DialogResultUpdateUserDialog,DialogConfirmDialog]
})
export class DashBoardModule { }
