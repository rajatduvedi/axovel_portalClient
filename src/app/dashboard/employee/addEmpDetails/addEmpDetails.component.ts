import { Component, OnInit,ViewChild,OnChanges ,Input  , AfterViewChecked,ChangeDetectorRef,AfterViewInit} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FormControl, Validators , NgForm, FormGroup, FormBuilder,} from '@angular/forms';
import{ EmployeeDetails } from '../../../employeeDetails';
import { EmpAddService } from '../../../service/empAdd.service';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const M0B_REGEX = /^[0-9]*$/i;
const NAME_REGEX = /^[a-zA-Z][a-zA-Z ]+/ ;

@Component({
    moduleId: module.id,
    templateUrl: './addEmpDetails.component.html',
    styleUrls: ['./addEmpDetails.component.css'],
    providers:[EmpAddService],
})
export class AddEmpDetailsComponent implements AfterViewInit,OnInit {
  form: FormGroup;
  public model: any={};
  errors:any = [];
  public check = 0;
  public checkEmailErrorMsg:any;
  public checkUserErrorMsg:any;
  public confirmPassword:any;
  public dateerror:boolean =true;
  returnUrl:string;
  minDate=new Date();
  Role= [
    'Permanent',
    'Trainee',
    'Summer Trainee',
  ];
  status:any=[
    'Active',
    'Not Active',
  ]
  constructor( private formBuilder: FormBuilder,private router: Router,private route: ActivatedRoute,private cdr: ChangeDetectorRef,private empAddService :EmpAddService ) {
    this.errors.text=1;
  }
  ngOnInit() {
    if(localStorage.getItem('empDetails')){
    this.model = JSON.parse(localStorage.getItem('empDetails'));
    setTimeout(() =>this.model );
    const str: string[] = this.model.joinDate.split('-');
    const strEnd:string[]= this.model.service_cont_end.split('-');
    this.model.joinDate = new Date(+str[2].slice(0,2), +str[1], +str[0]);
    this.model.service_cont_end = new Date(+strEnd[2].slice(0,2), +strEnd[1], +strEnd[0]);
    this.minDate = new Date(this.model.joinDate);
        }
    this.form = this.formBuilder.group({
      'emailFormControl': new FormControl('', [

          Validators.required,
          Validators.pattern(EMAIL_REGEX)]),

      'usernameFormControl': new FormControl('', [
          Validators.required ]
        ),
      'fnameFormControl': new FormControl('', [
          Validators.required,
        Validators.pattern(NAME_REGEX)]),
      'lnameFormControl' : new FormControl('', [
          Validators.required,
          Validators.pattern(NAME_REGEX)]),
      'conpernameFormControl':new FormControl('', [
          Validators.required,
          Validators.pattern(NAME_REGEX)]),

      'conpermobFormControl':new FormControl('', [
          Validators.required,
          Validators.pattern(M0B_REGEX)]),
      'passwordFormControl': new FormControl('', [
          Validators.required,
          Validators.minLength(6)]),
      'ConfirmPasswordFormControl': new FormControl('', [
          Validators.required,
          Validators.minLength(6)]),
      'mob_noFormControl' : new FormControl('', [
          Validators.required,
          Validators.pattern(M0B_REGEX)]),
      'emp_role' : new FormControl(''),
      'status' : new FormControl(''),

      'joinDate' : new FormControl(this.model.joinDate,[
          Validators.required]),
      'serviceEnd' : new FormControl(this.model.service_cont_end ,[
          Validators.required]),
    });
        // console.log(this.emailFormControl.touched);

  }
  ngAfterViewChecked(){
  }
  ngAfterViewInit() {
      this.cdr.detectChanges();
    }

  onBlurMethodEmail(emailValue:string){
      if(emailValue){
        this.empAddService.emailCheck({email:emailValue}).subscribe(data=>{
        this.checkEmailErrorMsg=0;
        }, error => {
        this.checkEmailErrorMsg = JSON.parse(error._body).message;
        }
      );
    }else{
            this.checkEmailErrorMsg=0;
        }
}
  onInput(picker){
    // this.onchange=true;
    var event = picker._selected;
    // console.log(picker._selected);
    if(event){
      this.minDate = event;
      this.dateerror = true;
    }
    else{
      this.dateerror = false;
    }
  }
  onBlurMethodUser(userValue:string){
    if(userValue){
      console.log(userValue);
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
  passwordInput(item:any){
    if(this.model.password == item){
      console.log("true");
      this.confirmPassword = 1;
    }
    else{
      console.log("false");
      this.confirmPassword = 0;
    }
  }
  onblurPassword(item:any){
    if(this.confirmPassword){
    document.getElementById("confirm").style.display='none';
  }
  }
  onSubmit(){
    this.model.joinDate = this.form.value.joinDate;
    this.model.service_cont_end=this.form.value.serviceEnd;
    console.log(this.form.value.joinDate);
    console.log(this.form);
      if(this.confirmPassword ){
          if(this.model.status =='Active'){
              this.model.status =true;
          }
          else{
              this.model.status=false;
          }
        this.model.first_name= this.model.first_name.charAt(0).toUpperCase() + this.model.first_name.slice(1);
          localStorage.setItem('empDetails', JSON.stringify(this.model));
          this.router.navigate(['dashboard/add-step2']);
    }
  }
}
