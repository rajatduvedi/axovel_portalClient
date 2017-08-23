import { Component, OnInit,ViewChild  , AfterViewChecked,ChangeDetectorRef,AfterViewInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { UserService } from '../../service/user.service';
import {FormControl, Validators , NgForm} from '@angular/forms';
import{ EmployeeDetails } from '../../../employeeDetails';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const M0B_REGEX = /^[0-9]*$/i;
const NAME_REGEX = /^[a-zA-Z][a-zA-Z ]+/ ;
// import { DateAdapter, NativeDateAdapter } from '@angular/material';
// import { routerTransition } from '../../router.animations';

@Component({
    moduleId: module.id,
    // selector: 'app-addEmpDetails',
    templateUrl: './addEmpDetails.component.html',
    styleUrls: ['./addEmpDetails.component.css'],
    // providers:[UserService],
    // animations: [routerTransition()]
})
export class AddEmpDetailsComponent implements AfterViewInit,OnInit {
  @ViewChild('f') empForm: NgForm;
    public model: any={};
    errors:any = [];
    public check = 0;
    // favoriteSeason: string;

Role= [
  'Permanent',
  'Trainee',
  'Summer Trainee',

];

status:any=[
  'Active',
  'Not Active',
]
    constructor( private router: Router,private cdr: ChangeDetectorRef,) {
      this.errors.text=1;

      // this.model.user_role
    }

    ngOnInit() {
      this.model = JSON.parse(localStorage.getItem('empDetails'));
      setTimeout(() =>this.model );
    }
    ngAfterViewChecked(){
      // if(localStorage.getItem('empDetails')){
      // this.model = JSON.parse(localStorage.getItem('empDetails'));
      // }
    }
    ngAfterViewInit() {
  this.cdr.detectChanges();
}
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);

    usernameFormControl = new FormControl('', [
        Validators.required ]
        );
    fnameFormControl = new FormControl('', [
        Validators.required,
      Validators.pattern(NAME_REGEX)]);
    lnameFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(NAME_REGEX)]);
    conpernameFormControl= new FormControl('', [
        Validators.required]);
    conpermobFormControl= new FormControl('', [
        Validators.required,
        Validators.pattern(M0B_REGEX)]);
    passwordFormControl= new FormControl('', [
        Validators.required,
        Validators.minLength(6)]);
    mob_noFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(M0B_REGEX)]);
    // checkbox(){
    //     // this.disabled=1;
    //     if(this.model.){
    //     this.check=1;
    //   }

    onSubmit(){
      if(this.model.first_name && this.model.last_name && this.model.mob_no && this.model.emergency_cont_person && this.model.emergency_cont_no && this.model.username && this.model.email && this.model.password ){
      console.log(this.model);
      console.log(this.empForm);
      console.log(this.empForm.valid);
      if(this.model.status =='Active'){
        this.model.status =true;
        // alert("hello");
      }
      else{
        this.model.status=false;
      }

      localStorage.setItem('empDetails', JSON.stringify(this.model));
        this.router.navigate(['dashboard/add-step2']);
    }
    console.log(this.model);
      // this.userService.sendDataNextStep(this.model);

    }

}
