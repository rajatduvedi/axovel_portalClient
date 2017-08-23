import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Headers } from '@angular/http';
// import {
//     NgbAlertModule
// } from '@ng-bootstrap/ng-bootstrap';


import { AddEmpDeviceDetailsRoutingModule } from './addEmpDeviceDetails-routing.module';
import { AddEmpDeviceDetailsComponent } from './addEmpDeviceDetails.component';
import {MdSidenavModule,
        MdTableModule,
        MdInputModule,
        MdButtonModule,
        MdSelectModule,
        MdIconModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdCheckboxModule


} from '@angular/material';
// import { StatModule, SharedModule, AlertSharedModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        // NgbAlertModule.forRoot(),
        AddEmpDeviceDetailsRoutingModule,
        MdSidenavModule,
        MdTableModule,
        MdInputModule,
        MdButtonModule,
        MdSelectModule,
        MdIconModule,
        MdToolbarModule,
        MdMenuModule,
        MdCardModule,
        MdDatepickerModule,
        MdNativeDateModule,
        FormsModule,ReactiveFormsModule,HttpModule,
        MdCheckboxModule
        // StatModule,
        // SharedModule,
        // AlertSharedModule
    ],
    declarations: [
        AddEmpDeviceDetailsComponent
    ]
})
export class AddEmpDeviceDetailsModule { }
