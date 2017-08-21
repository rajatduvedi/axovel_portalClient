import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import{ EmployeeDetails } from '../../employeeDetails';
import { Router,ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
const PIN_REGEX = /^[0-9]*$/i;
// import { AddEmpDetailsComponent } from '../addEmpDetails/addEmpDetails.component';
// import { DateAdapter, NativeDateAdapter } from '@angular/material';
// import { routerTransition } from '../../router.animations';

@Component({
    moduleId: module.id,
    templateUrl: './addEmpAddress.component.html',
    styleUrls: ['./addEmpAddress.component.css'],
    providers:[UserService ],
    // animations: [routerTransition()]
})
export class AddEmpAddressComponent implements OnInit {
    public prevDetails: any={};
    public model: any={};
    constructor(private userService: UserService , private router: Router) {

    }

    ngOnInit(

    ) {
        // this.userService.gotonextStep();
        this.model = JSON.parse(localStorage.getItem('empDetails'));

        console.log(this.model.first_name);
        // console.log(this.addEmpDetailsComponent.model);
    }
    peraddFormControl = new FormControl('', [
        Validators.required]);
    peraddcityFormControl = new FormControl('', [
        Validators.required]);
    peraddpinFormControl = new FormControl('', [
        Validators.required ,
        Validators.pattern(PIN_REGEX)]);
    curaddFormControl = new FormControl('', [
        Validators.required]);
    curaddcityFormControl = new FormControl('', [
        Validators.required]);
    curaddpinFormControl = new FormControl('', [
        Validators.required ,
        Validators.pattern(PIN_REGEX)]);
    gotonextStep(){
        localStorage.setItem('empDetails', JSON.stringify(this.model));
        this.model = JSON.parse(localStorage.getItem('empDetails'));

        console.log("step2");
        console.log(this.model);
        this.router.navigate(['emp/add-step3']);
    }
}
