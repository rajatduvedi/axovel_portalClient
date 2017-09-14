import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { HttpModule,Headers } from '@angular/http';
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
        MdRadioModule,
        MdCheckboxModule,
        MdProgressSpinnerModule

} from '@angular/material';
@NgModule({
    imports: [
        CommonModule,
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
        MdCheckboxModule,
        MdProgressSpinnerModule,
        FormsModule,ReactiveFormsModule,HttpModule,MdRadioModule
    ],
    declarations: [
        AddEmpDOCDetailsComponent
    ]
})
export class AddEmpDOCDetailsModule { }
