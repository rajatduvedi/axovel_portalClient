import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { UserService } from '../../service/user.service';
import{ EmployeeDetails } from '../../../employeeDetails';
import{ Http , Response , Headers} from '@angular/http';
import {FormControl, Validators , NgForm , FormGroup} from '@angular/forms';
import{ Observable }from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
// import { DateAdapter, NativeDateAdapter } from '@angular/material';
// import { routerTransition } from '../../router.animations';

@Component({
    moduleId: module.id,
    templateUrl: './addEmpDeviceDetails.component.html',
    styleUrls: ['./addEmpDeviceDetails.component.css'],
    // providers:[UserService],
    // animations: [routerTransition()]
})
export class AddEmpDeviceDetailsComponent implements OnInit {
    public model: any={};
    form:FormGroup
    constructor( private router: Router) {

    }

    ngOnInit() {
      this.model = JSON.parse(localStorage.getItem('empDetails'));
      this.form = new FormGroup({
        'laptop_no' : new FormControl('not allocated',[
                    Validators.required]),
        'mouse_no' : new FormControl('not allocated'),
        'keyboard_no' : new FormControl('not allocated'),

      });
    }
    gotonextStep(){
      if(!this.model.laptop_no){
        this.model.laptop_no = "not allocated"
      }
      if(!this.model.mouse_no){
        this.model.mouse_no = "not allocated"
      }
      if(!this.model.keyboard_no){
        this.model.keyboard_no = "not allocated"
      }
      localStorage.setItem('empDetails', JSON.stringify(this.model));
      this.model = JSON.parse(localStorage.getItem('empDetails'));
      this.router.navigate(['dashboard/add-step5']);
    }
    skipnextStep(){
      this.router.navigate(['dashboard/add-step5']);
    }
    gotoprevStep(){
      this.router.navigate(['dashboard/add-step3']);
    }
}
