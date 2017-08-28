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

@Component({
    moduleId: module.id,
    templateUrl: './addEmpPrevCompanyDetails.component.html',
    styleUrls: ['./addEmpPrevCompanyDetails.component.css'],
})
export class AddEmpPrevCompanyDetailsComponent implements OnInit {
    public model: any={};
    constructor( private router: Router) {
    }

    ngOnInit() {
      if(localStorage.getItem('empDetails')){
        this.model = JSON.parse(localStorage.getItem('empDetails'));
      }
      else {
        this.router.navigate(['dashboard/add']);
      }
      if(!this.model.per_address && this.model.username){
        this.router.navigate(['dashboard/add-step2']);
      }
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
        this.router.navigate(['dashboard/add-step4']);
    }
    skipnextStep(){
        this.router.navigate(['dashboard/add-step4']);
    }
    gotoprevStep(){
        this.router.navigate(['dashboard/add-step2']);
    }
}
