import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import{ EmployeeDetails } from '../../employeeDetails';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
// import { DateAdapter, NativeDateAdapter } from '@angular/material';
// import { routerTransition } from '../../router.animations';

@Component({
    moduleId: module.id,
    templateUrl: './addEmpPrevCompanyDetails.component.html',
    styleUrls: ['./addEmpPrevCompanyDetails.component.css'],
    providers:[UserService],
    // animations: [routerTransition()]
})
export class AddEmpPrevCompanyDetailsComponent implements OnInit {
    public model: any={};
    constructor( private router: Router,private userService: UserService) {

    }

    ngOnInit() {
      this.model = JSON.parse(localStorage.getItem('empDetails'));
    }
    gotonextStep(){
      // this.userService.sendDataNextStep(this.model);
      localStorage.setItem('empDetails', JSON.stringify(this.model));
      this.model = JSON.parse(localStorage.getItem('empDetails'));
      console.log("step3");
      console.log(this.model);
        this.router.navigate(['emp/add-step4']);
    }
}
