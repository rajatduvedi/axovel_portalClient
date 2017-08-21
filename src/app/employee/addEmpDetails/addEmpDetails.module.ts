import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Headers } from '@angular/http';
// import {
//     NgbAlertModule
// } from '@ng-bootstrap/ng-bootstrap';


import { AddEmpDetailsRoutingModule } from './addEmpDetails-routing.module';
import { AddEmpDetailsComponent } from './addEmpDetails.component';
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


} from '@angular/material';
// import { StatModule, SharedModule, AlertSharedModule } from '../shared';

@NgModule({
    imports: [
        CommonModule,
        // NgbAlertModule.forRoot(),
        AddEmpDetailsRoutingModule,
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
        // StatModule,
        // SharedModule,
        // AlertSharedModule
    ],
    declarations: [
        AddEmpDetailsComponent
    ]
})
export class AddEmpDetailsModule { }
