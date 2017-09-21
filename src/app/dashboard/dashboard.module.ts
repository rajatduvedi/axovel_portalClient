import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DashBoardRoutingModule } from './dashboard-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import{ DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import {TableComponent ,DialogConfirmDialog, DialogResultEditDialog,DialogResultUpdateUserDialog} from './table/table.component';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { RoleAuthGuard } from '../guards/roleAuth.guard';
import { SettingComponent } from './setting/setting.component';
import { AddDeviceComponent } from './hr/addDevice.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        DashBoardRoutingModule,
        SharedModule,
        FormsModule,ReactiveFormsModule,
        Ng2FilterPipeModule,
    ],
    declarations: [
        DashBoardComponent,
        FooterComponent,
        HeaderComponent,
        SidebarComponent,
        DashboardContentComponent,
        TableComponent,
        DialogResultEditDialog,
        DialogResultUpdateUserDialog,
        DialogConfirmDialog,
        SettingComponent,
        AddDeviceComponent
    ],
    providers: [
        RoleAuthGuard
    ],
    entryComponents:[DialogResultEditDialog,DialogResultUpdateUserDialog,DialogConfirmDialog]
})
export class DashBoardModule { }
