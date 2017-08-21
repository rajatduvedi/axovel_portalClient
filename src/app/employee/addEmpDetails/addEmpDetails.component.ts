import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user.service';
import {FormControl, Validators} from '@angular/forms';
import{ EmployeeDetails } from '../../employeeDetails';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const M0B_REGEX = /^[0-9]*$/i;
// import { DateAdapter, NativeDateAdapter } from '@angular/material';
// import { routerTransition } from '../../router.animations';

@Component({
    // moduleId: module.id,
    selector: 'app-addEmpDetails',
    templateUrl: './addEmpDetails.component.html',
    styleUrls: ['./addEmpDetails.component.css'],
    providers:[UserService],
    // animations: [routerTransition()]
})
export class AddEmpDetailsComponent implements OnInit {
    public model: any={};
    errors:any = [];
    constructor( private router: Router,private userService: UserService) {
      this.errors.text=1;
    }

    ngOnInit() {}
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)]);

    usernameFormControl = new FormControl('', [
        Validators.required]);
    fnameFormControl = new FormControl('', [
        Validators.required]);
    lnameFormControl = new FormControl('', [
        Validators.required]);
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
    gotonextStep(){
      console.log(this.model);
      // this.userService.sendDataNextStep(this.model);
      localStorage.setItem('empDetails', JSON.stringify(this.model));
        this.router.navigate(['emp/add-step2']);
    }
}
