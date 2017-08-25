import {Component} from '@angular/core';
import { DataService } from '../../service/data.service';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormControl, Validators , NgForm , FormGroup} from '@angular/forms';
import{EmployeeDetails} from '../../employeeDetails';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
    providers:[DataService],
})
export class TableComponent {
  users: any = [];
  selectedOption: string;
  constructor(private dataService: DataService , public dialog: MdDialog ) {
    // Fill up the database with 100 users.
    // for (let i = 0; i < 20; i++) { this.addUser(); }
  }
  ngOnInit(): void{
      this.getUsersList();
}
getUsersList() {
  this.dataService.listUsers({user_id: JSON.parse(localStorage.getItem('currentUser')).id}).subscribe(result => {
    this.users = result.data;
    console.log(this.users);
  }, err => {
    console.log(err);
  });
}
editDialogbox(id:any){
  console.log(id);
  if(id){
    let dialogRef = this.dialog.open(DialogResultEditDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
    dialogRef.componentInstance.user_id = id;
    }
}
}

@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: 'dialog-edit-dialog.html',
  styleUrls: ['dialogEdit.component.css'],
  providers:[DataService],
})
export class DialogResultEditDialog {
  form:FormGroup;
  public model: any={};
  // public model:any={};
  public user_id:any;
  user: any = [];
  updateuser:any=[];
  Role= [
    'Permanent',
    'Trainee',
    'Summer Trainee',
  ];
  status:any=[
    'Active',
    'Not Active',
  ]
  constructor(public dialogRef: MdDialogRef<DialogResultEditDialog> , private dataService: DataService) {}

  ngOnInit() {
    console.log("this.model");
    console.log(this.model);
    this.getUserdata(this.user_id);
    // console.log("this.user_id");
    // console.log(this.user_id);
    // this.model = JSON.parse(localStorage.getItem('empDetails'));
    this.form = new FormGroup({
      'emp_fname':new FormControl('',[
          Validators.required,
      ]),
      'emp_lname':new FormControl('',[
          Validators.required,
      ]),
      'mob_no':new FormControl('',[
          Validators.required,
      ]),
      'join_date':new FormControl(''),
      'service_cont_end':new FormControl(''),
      'emergency_cont_person':new FormControl('',[
          Validators.required,
      ]),
      'emergency_cont_no':new FormControl('',[
          Validators.required,
      ]),
      'status':new FormControl(''),
      'employee_role':new FormControl(''),
      'cur_address':new FormControl('',[
          Validators.required,
      ]),
      'cur_city':new FormControl('',[
          Validators.required,
      ]),
      'cur_pincode':new FormControl('',[
          Validators.required,
      ]),
      'per_address':new FormControl('',[
          Validators.required,
      ]),
      'per_city':new FormControl('',[
          Validators.required,
      ]),
      'per_pincode':new FormControl('',[
          Validators.required,
      ]),
      // 'join_date':new FormControl(''),
      // 'service_cont_end':new FormControl(''),
      // 'emergency_cont_person':new FormControl(''),
      // 'emergency_cont_no':new FormControl(''),
      // 'status':new FormControl(''),
      // 'emp_role':new FormControl(''),
      // 'cur_address':new FormControl(''),
      // 'cur_city':new FormControl(''),
      // 'cur_pinCode':new FormControl(''),
      'laptop_no' : new FormControl('not allocated',[
                  Validators.required]),
      'mouse_no' : new FormControl('not allocated'),
      'keyboard_no' : new FormControl('not allocated'),
      'company_name':new FormControl(''),
      'leaving_date':new FormControl(''),
      'CTC':new FormControl(''),
      'TL_no':new FormControl(''),
      'HR_no':new FormControl(''),

    });
  }
  getUserdata(id:any){
    console.log(id);
    this.dataService.UserData({emp_user_id: id}).subscribe(result => {
      this.user = result.data;
      if(this.user){
        this.model = this.user;
        console.log(this.model.userId);
        if(this.model.status ==true){
            this.model.status ='Active';
        }
        else{
            this.model.status='Not Active';
        }
      // this.model.first_name = this.user.emp_fname;
      // this.model.last_name  =this.user.emp_lname;
      // this.model.mob_no   =this.user.mob_no;
      // this.model.emergency_cont_person =this.user.emergency_cont_person;
      // this.model.emergency_cont_no  =this.user.emergency_cont_no;
      // this.model.status  =this.user.status;
      // this.model.emp_role  =this.user.employee_role;
      // this.model.cur_address  =this.user.cur_address;
      // this.model.cur_city  =this.user.cur_city;
      // this.model.cur_pinCode  =this.user.cur_pincode;
      // this.model.per_address  =this.user.per_address;
      // this.model.per_city   =this.user.per_city;
      // this.model.per_pinCode =this.user.per_pincode;
      // this.model.laptop_no  =this.user.laptop_no;
      // this.model.mouse_no   =this.user.mouse_no;
      // this.model.keyboard_no  =this.user.keyboard_no;
      // this.model.company_name=this.user.company_name;
      // this.model.leaving_date=this.user.leaving_date;
      // this.model.ctc=this.user.ctc;
      // this.model.TL_no=this.user.TL_no;
      // this.model.HR_no=this.user.HR_no;

    }
      console.log(this.user);
    }, err => {
      console.log(err);
    });
  }
  onSubmit(){
      if(this.model.emp_fname && this.model.emp_lname && this.model.mob_no && this.model.emergency_cont_person && this.model.emergency_cont_no  ){
          console.log(this.user_id);
          console.log("this.model.userId");
          this.model.emp_user_id=this.user_id
          if(this.model.status =='Active'){
              this.model.status =true;
          }
          else{
              this.model.status=false;
          }
          console.log(this.model);
        this.dataService.UpdateData(this.model).subscribe(result => {
          this.updateuser = result.data;
          console.log(this.updateuser);
        }, err => {
          console.log(err);
        });
    }
  }
}
