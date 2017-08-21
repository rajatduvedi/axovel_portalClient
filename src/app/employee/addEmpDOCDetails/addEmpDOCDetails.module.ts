import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';

import { HttpModule,Headers } from '@angular/http';
// import {
//     NgbAlertModule
// } from '@ng-bootstrap/ng-bootstrap';


import { AddEmpDOCDetailsRoutingModule } from './addEmpDOCDetails-routing.module';
import { AddEmpDOCDetailsComponent } from './addEmpDOCDetails.component';
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
        AddEmpDOCDetailsRoutingModule,
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
        FileUploadModule,
        FormsModule,ReactiveFormsModule,HttpModule,
        // StatModule,
        // SharedModule,
        // AlertSharedModule
    ],
    declarations: [
        AddEmpDOCDetailsComponent
    ]
})
export class AddEmpDOCDetailsModule { }
