import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { UserService } from '../../service/user.service';
import{ EmployeeDetails } from '../../../employeeDetails';
import {FormControl, Validators , NgForm} from '@angular/forms';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
const M0B_REGEX = /^[0-9]*$/i;
// import { DateAdapter, NativeDateAdapter } from '@angular/material';
// import { routerTransition } from '../../router.animations';

@Component({
    moduleId: module.id,
    templateUrl: './addEmpPrevCompanyDetails.component.html',
    styleUrls: ['./addEmpPrevCompanyDetails.component.css'],
    // providers:[UserService],
    // animations: [routerTransition()]
})
export class AddEmpPrevCompanyDetailsComponent implements OnInit {
    public model: any={};
    constructor( private router: Router) {

    }

    ngOnInit() {
      this.model = JSON.parse(localStorage.getItem('empDetails'));
    }
    hr_noFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(M0B_REGEX)]);
    tl_noFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(M0B_REGEX)]);

    gotonextStep(){
      // this.userService.sendDataNextStep(this.model);
      // console.log(tl)
      // if(this.model.company_name){
      //   this.model.company_name = 'not allocated';
      // }
      // if(this.model.leaving_date){
      //   this.model.company_name = 'not allocated';
      // }
      // if(this.model.ctc){
      //   this.model.company_name = 'not allocated';
      // }
      // if(this.model.HR_no){
      //   this.model.company_name = 'not allocated';
      // }
      // if(this.model.TL_no){
      //   this.model.company_name = 'not allocated';
      // }
      localStorage.setItem('empDetails', JSON.stringify(this.model));
      this.model = JSON.parse(localStorage.getItem('empDetails'));
      console.log("step3");
      console.log(this.model);
        this.router.navigate(['dashboard/add-step4']);
    }
    skipnextStep(){
      // this.model.company_name= "no_allocated";
      // this.model.leaving_date="no_allocated";
      this.router.navigate(['dashboard/add-step4']);
    }
    gotoprevStep(){
      this.router.navigate(['dashboard/add-step2']);
    }
}
