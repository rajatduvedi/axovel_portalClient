import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import{ Http , Response , Headers} from '@angular/http';
import {FormControl, Validators , NgForm , FormGroup} from '@angular/forms';
import{ Observable }from 'rxjs/Observable';
import{ DataService } from '../../service/data.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
@Component({
  moduleId: module.id,
  templateUrl: './addDevice.component.html',
  styleUrls: ['./addDevice.component.css'],
  providers: [DataService]
})
export class AddDeviceComponent implements OnInit{
  constructor(private dataService: DataService){}
  public errorMsg: any;
  public model: any={};
  form:FormGroup;
  devices = [
    {value: 'laptop', viewValue: 'Laptop'},
    {value: 'ipad', viewValue: 'Ipad'},
    {value: 'mobile', viewValue: 'Mobile'}
  ];
  checks = [
    {value: true, viewValue: 'Yes'},
    {value: false, viewValue: 'No'}
];
  ngOnInit() {
    this.form = new FormGroup({
      'device_name': new FormControl('',[Validators.required]),
      'device_no' : new FormControl('',[Validators.required]),
      'device_company' : new FormControl('',[Validators.required]),
      'device_code' : new FormControl('',[Validators.required]),
      'bag': new FormControl(false,[Validators.required]),
      'mouse': new FormControl(false,[Validators.required]),
      'keyboard': new FormControl(false,[Validators.required]),
      'charger': new FormControl(false,[Validators.required]),
      'assign_status': new FormControl(false,[Validators.required]),
    });
  }
  addDevice() {
    console.log(this.model);
    this.dataService.addDeviceService(this.model)
      .subscribe(data => {
        console.log(data);
      },
    error => {
      this.errorMsg=JSON.parse(error._body).message;
    })
  }
 }
