import { Component, OnInit } from '@angular/core';
// import { UserService } from '../../service/user.service';
import{ EmployeeDetails } from '../../../employeeDetails';
import { Router,ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
const PIN_REGEX = /^[0-9]*$/i;
@Component({
    moduleId: module.id,
    templateUrl: './addEmpAddress.component.html',
    styleUrls: ['./addEmpAddress.component.css'],
})
export class AddEmpAddressComponent implements OnInit {
    public prevDetails: any={};
    public model: any={};
    checked = 0;
    errorsubmit=0;
    returnUrl:string;
    // StateCtrl: FormControl;
    // CountryCtrl:FormControl;
    // filteredStates: any;
    // filteredCountry:any;
//     states = [
//   'Alabama',
//   'Alaska',
//   'Arizona',
//   'Arkansas',
//   'California',
//   'Colorado',
//   'Connecticut',
//   'Delaware',
//   'Florida',
//   'Georgia',
//   'Hawaii',
//   'Idaho',
//   'Illinois',
//   'Indiana',
//   'Iowa',
//   'Kansas',
//   'Kentucky',
//   'Louisiana',
//   'Maine',
//   'Maryland',
//   'Massachusetts',
//   'Michigan',
//   'Minnesota',
//   'Mississippi',
//   'Missouri',
//   'Montana',
//   'Nebraska',
//   'Nevada',
//   'New Hampshire',
//   'New Jersey',
//   'New Mexico',
//   'New York',
//   'North Carolina',
//   'North Dakota',
//   'Ohio',
//   'Oklahoma',
//   'Oregon',
//   'Pennsylvania',
//   'Rhode Island',
//   'South Carolina',
//   'South Dakota',
//   'Tennessee',
//   'Texas',
//   'Utah',
//   'Vermont',
//   'Virginia',
//   'Washington',
//   'West Virginia',
//   'Wisconsin',
//   'Wyoming',
// ];
// country = [
// 'Alabama',
// 'Alaska',
// 'Arizona',
// 'Arkansas',
// 'California',
// 'Colorado',
// 'Connecticut',
// 'Delaware',
// 'Florida',
// 'Georgia',
// 'Hawaii',
// 'Idaho',
// 'Illinois',
// 'Indiana',
// 'Iowa',
// 'Kansas',
// 'Kentucky',
// 'Louisiana',
// 'Maine',
// 'Maryland',
// 'Massachusetts',
// 'Michigan',
// 'Minnesota',
// 'Mississippi',
// 'Missouri',
// 'Montana',
// 'Nebraska',
// 'Nevada',
// 'New Hampshire',
// 'New Jersey',
// 'New Mexico',
// 'New York',
// 'North Carolina',
// 'North Dakota',
// 'Ohio',
// 'Oklahoma',
// 'Oregon',
// 'Pennsylvania',
// 'Rhode Island',
// 'South Carolina',
// 'South Dakota',
// 'Tennessee',
// 'Texas',
// 'Utah',
// 'Vermont',
// 'Virginia',
// 'Washington',
// 'West Virginia',
// 'Wisconsin',
// 'Wyoming',
// ];

    constructor( private router: Router , private route: ActivatedRoute,) {}
  //     this.StateCtrl = new FormControl('');
  //     this.filteredStates = this.StateCtrl.valueChanges
  //   .startWith(null)
  //   .map(name => this.filterStates(name));
  //
  //   this.CountryCtrl = new FormControl('');
  //   this.filteredCountry = this.CountryCtrl.valueChanges
  // .startWith(null)
  // .map(name => this.filterCountry(name));
  //   }

    ngOnInit(

    ) {
        if(! localStorage.getItem('empDetails')){
            this.router.navigate(['dashboard/add']);
        }
        else{
        this.model = JSON.parse(localStorage.getItem('empDetails'));
      }
    }
 //    filterStates(val: string) {
 //  return val ? this.states.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
 //             : this.states;
 //         }
 //   filterCountry(val: string) {
 // return val ? this.country.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
 //            : this.country;
 //        }
    peraddFormControl = new FormControl('', [
        Validators.required]);
    peraddcityFormControl = new FormControl('', [
        Validators.required]);
    peraddpinFormControl = new FormControl('', [
        Validators.required ,
        Validators.pattern(PIN_REGEX)]);
    peraddcountryFormControl = new FormControl('', [
        Validators.required]);
    curaddFormControl = new FormControl('', [
        Validators.required]);
    curaddcityFormControl = new FormControl('', [
        Validators.required]);
    curaddpinFormControl = new FormControl('', [
        Validators.required ,
        Validators.pattern(PIN_REGEX)]);
    curaddcountryFormControl = new FormControl('', [
        Validators.required]);

    checkbox(){
        if(!this.checked){
          this.model.per_address= this.model.cur_address;
          this.model.per_city=this.model.cur_city;
          this.model.per_pincode=this.model.cur_pincode;
          this.model.per_country=this.model.cur_country;

          this.checked=1;
      }
        else if (this.checked==1){
          this.model.per_address= '';
          this.model.per_city='';
          this.model.per_pincode='';
          this.model.per_country='';
          this.checked=0;
        }
    }
    gotonextStep(){
        if(this.model.per_address && this.model.per_country  && this.model.per_city && this.model.cur_country && this.model.per_pincode && this.model.cur_address && this.model.cur_city && this.model.cur_pincode){
          localStorage.setItem('empDetails', JSON.stringify(this.model));
          this.model = JSON.parse(localStorage.getItem('empDetails'));
          console.log(this.model)
          this.router.navigate(['dashboard/add-step3']);
        }
        else{
          this.errorsubmit=1;
        }
    }
    gotoprevStep(){
        this.router.navigate(['dashboard/add']);
    }

}
