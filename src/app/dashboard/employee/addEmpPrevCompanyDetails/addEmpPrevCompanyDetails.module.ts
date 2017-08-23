import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule,Headers } from '@angular/http';
// import {
//     NgbAlertModule
// } from '@ng-bootstrap/ng-bootstrap';


import { AddEmpPrevCompanyDetailsRoutingModule } from './addEmpPrevCompanyDetails-routing.module';
import { AddEmpPrevCompanyDetailsComponent } from './addEmpPrevCompanyDetails.component';
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
        AddEmpPrevCompanyDetailsRoutingModule,
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
        AddEmpPrevCompanyDetailsComponent
    ]
})
export class AddEmpPrevCompanyDetailsModule { }
