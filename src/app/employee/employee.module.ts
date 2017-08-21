import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
// import { AdminAuthGuard } from './shared/guard/auth.guard';
import {MdTabsModule,
          MdButtonModule,} from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        // NgbDropdownModule.forRoot(),
        EmployeeRoutingModule,
        MdTabsModule,
        MdButtonModule,
    ],
    declarations: [
        EmployeeComponent,
        
    ],
    providers: [
        // AdminAuthGuard
    ]
})
export class EmployeeModule { }
