import { Component, OnInit,ViewChild,OnChanges ,Input  , AfterViewChecked,ChangeDetectorRef,AfterViewInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FormControl, Validators , NgForm} from '@angular/forms';
import{ EmployeeDetails } from '../../../employeeDetails';
import { EmpAddService } from '../../../service/empAdd.service';
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
    providers:[EmpAddService],
})
export class AddEmpDetailsComponent implements AfterViewInit,OnInit {
  @ViewChild('f') empForm: NgForm;
  public model: any={};
  errors:any = [];
  public check = 0;
  public checkEmailErrorMsg:any;
  public checkUserErrorMsg:any;
  Role= [
    'Permanent',
    'Trainee',
    'Summer Trainee',
  ];
  status:any=[
    'Active',
    'Not Active',
  ]
  constructor( private router: Router,private cdr: ChangeDetectorRef,private empAddService :EmpAddService ) {
    this.errors.text=1;
}
  ngOnInit() {
    this.model = JSON.parse(localStorage.getItem('empDetails'));
    setTimeout(() =>this.model );
      // console.log(this.emailFormControl.touched);
}
  ngAfterViewChecked(){
  }
  ngAfterViewInit() {
      this.cdr.detectChanges();
}
  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX),
  ]);

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

  onBlurMethodEmail(emailValue:string){
      // console.log(this.emailFormControl.touched);
      if(emailValue){
        this.empAddService.emailCheck({email:emailValue}).subscribe(data=>{
        // console.log(data);
        this.checkEmailErrorMsg=0;
        }, error => {
        // console.log(error);
        this.checkEmailErrorMsg = JSON.parse(error._body).message;
        }
      );
  }
    else{
        this.checkEmailErrorMsg=0;
    }
}
  onBlurMethodUser(userValue:string){
    if(userValue){
      // console.log(userValue);
        this.empAddService.userCheck({username:userValue}).subscribe(data=>{
          // console.log(data);
        this.checkUserErrorMsg=0;
        }, error => {
          // console.log(error);
          this.checkUserErrorMsg = JSON.parse(error._body).message;
        }
      );
    }
    else{
        this.checkUserErrorMsg=0;
    }
  }
  onSubmit(){
      if(this.model.first_name && this.model.last_name && this.model.mob_no && this.model.emergency_cont_person && this.model.emergency_cont_no && this.model.username && this.model.email && this.model.password ){
          if(this.model.status =='Active'){
              this.model.status =true;
          }
          else{
              this.model.status=false;
          }
          localStorage.setItem('empDetails', JSON.stringify(this.model));
          this.router.navigate(['dashboard/add-step2']);
    }
  }
}
