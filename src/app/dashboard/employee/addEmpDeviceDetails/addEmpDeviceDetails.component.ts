import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { UserService } from '../../service/user.service';
import{ EmployeeDetails } from '../../../employeeDetails';
import{ Http , Response , Headers} from '@angular/http';
import {FormControl, Validators , NgForm , FormGroup} from '@angular/forms';
import { DataService } from '../../../service/data.service';
import{ Observable }from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
// import { DateAdapter, NativeDateAdapter } from '@angular/material';
// import { routerTransition } from '../../router.animations';

@Component({
    moduleId: module.id,
    templateUrl: './addEmpDeviceDetails.component.html',
    styleUrls: ['./addEmpDeviceDetails.component.css'],
    providers:[DataService],
    // animations: [routerTransition()]
})
export class AddEmpDeviceDetailsComponent implements OnInit {
    public model: any={};
    form:FormGroup
    devices: any =[];
    devicefield: any;
    constructor( private router: Router, private dataService: DataService) {

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
      this.form = new FormGroup({
        'deviceId' : new FormControl('not allocated',[
                    Validators.required])
                  });
        this.getAllDevices();

    }

    selectDevice(item: any) {
      this.devicefield= this.devices.filter(function(event){
        return event.id == item;
      })[0];
      this.model.device_no = this.devicefield.device_no;
    }

    getAllDevices() {
      this.dataService.getDevices({user_id: JSON.parse(localStorage.getItem('currentUser')).id})
        .subscribe(result => {
          this.devices = result.data;
        },
      err => {
        console.log(err);
      })
    }
    gotonextStep(){
      console.log(this.model);
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
