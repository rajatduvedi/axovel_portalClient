import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {
//     NgbAlertModule
// } from '@ng-bootstrap/ng-bootstrap';


import { TableRoutingModule } from './table-routing.module';
import { TableComponent } from './table.component';
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
// import { SharedAlertModule } from '../_directives/shared-alert.module';

@NgModule({
    imports: [
        CommonModule,
        // FormsModule,
        // NgbAlertModule.forRoot(),
        TableRoutingModule,
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
        // SharedAlertModule
    ],
    declarations: [
        TableComponent
    ]
})
export class TableModule { }
