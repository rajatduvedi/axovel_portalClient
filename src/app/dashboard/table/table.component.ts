import {Component , ViewChild , ElementRef , OnChanges} from '@angular/core';
import { DataService } from '../../service/data.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MdDialog, MdDialogRef} from '@angular/material';
import {FormControl, Validators , NgForm , FormGroup} from '@angular/forms';
import{EmployeeDetails} from '../../employeeDetails';
import {PageEvent , MdPaginator} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import { DomSanitizer } from '@angular/platform-browser';
import jsPDF from 'jspdf';
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
  model: any={};
  emp_user_id: any = [];
  users: any = [];
  loadData:any=[];
  userFilter: any = {};
  public tableId:any;
  pageEvent: PageEvent;
  selectedOption: string;
  loadSpiner:boolean=true;
  checked: boolean=false;
  @ViewChild(MdPaginator) paginator: MdPaginator;
  selectedEmp: any = [];
constructor(private router: Router,private dataService: DataService , public dialog: MdDialog,public el: ElementRef ) {
}
  ngOnInit(): void{
      this.el.nativeElement.style.backgroundColor = 'gold';
      this.getUsersList(this.paginator);
  }
  onPaginateChange(event){
    this.pageload(event);
  }

  selectEmp(item: any) {
    // for(int i=0; i<)
    if(this.selectedEmp.find(x => x==item)) {
      this.selectedEmp.splice(this.selectedEmp.indexOf(item), 1)
    }
    else {
      this.selectedEmp.push(item);
    }
  }
  deleteSelectedEmp(){
    let dialogRef=  this.dialog.open(DialogConfirmDialog,{
    width: '400px',
  });
  dialogRef.afterClosed().subscribe(result => {
      if(result == 1){
        this.dataService.deleteMulEmp({user_id: JSON.parse(localStorage.getItem('currentUser')).id, emp_user_id: this.selectedEmp})
          .subscribe(result => {
          if(result){
            let dialogRef=  this.dialog.open(DialogResultUpdateUserDialog,{
            width: '400px',
          });
            // this.dataService.listUsers({user_id: JSON.parse(localStorage.getItem('currentUser')).id}).subscribe(result => {
            // this.users = result.data;
            // }, err => {
            //   // console.log(err);
            // });
            // this.router.renavigate(['dashboard/list']);
            location.reload();
            dialogRef.componentInstance.resultMsg = 'delete';
          }
      }, err => {
        console.log(err);
      });
      }
  });
    // this.dataService.deleteMulEmp({user_id: JSON.parse(localStorage.getItem('currentUser')).id, emp_user_id: this.selectedEmp})
    //   .subscribe(result => {
    //     console.log(result);
    //   },
    // err => {
    //
    // })
  }

  pageload(event){
  this.loadData=[];
  var start= event.pageIndex * event.pageSize;//0
  this.tableId = start
  var end = (event.pageIndex +1) * event.pageSize ;
  var j=0;
  for(var i=start ;i<end ;i++){
    if(this.users[i]){
    this.loadData[j++] = this.users[i];
      }
    }
  }
  downloadCsvfie(){
    this.dataService.exportCsv({user_id: JSON.parse(localStorage.getItem('currentUser')).id}).subscribe(result=>{
    console.log(result);
    window.open(result.data)
    }, err=>{

    });
  }
  getUsersList(paginator: MdPaginator) {
    this.dataService.listUsers({user_id: JSON.parse(localStorage.getItem('currentUser')).id}).subscribe(result => {
      this.users = result.data;
      // console.log(this.users);
      this.pageload(paginator);
      setTimeout (() => {
        // console.log("Hello from setTimeout");
          this.loadSpiner=false;
      }, 1000)

    }, err => {
      console.log(err);
    });
  }
editUserRow(id:any){
  // console.log(id);
  if(id){
    let dialogRef = this.dialog.open(DialogResultEditDialog,{
      // height: '400px',
      width: '1080px',
      // height:'1234px'
      // background:#9C27B0,
    });
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
      this.dataService.listUsers({user_id: JSON.parse(localStorage.getItem('currentUser')).id}).subscribe(result => {
        this.users = result.data;
        // console.log(this.users);
      }, err => {
        console.log(err);
      });
      // console.log(this.selectedOption);
    });
    dialogRef.componentInstance.user_id = id;
    dialogRef.componentInstance.check = 1;
    }
}
previewUserRow(id:any){
  // console.log(id);
  if(id){
    let dialogRef = this.dialog.open(DialogResultEditDialog,{
      width: '1080px',
    });
    dialogRef.componentInstance.user_id = id;
    dialogRef.componentInstance.check = 0;
    }
}
deleteUserRow(id:any){
  let dialogRef=  this.dialog.open(DialogConfirmDialog,{
  width: '400px',
});
  dialogRef.afterClosed().subscribe(result => {
      if(result == 1){
        this.dataService.deleteUserRow({user_id: JSON.parse(localStorage.getItem('currentUser')).id ,
                                      emp_user_id:id}).subscribe(result => {
          if(result){
            let dialogRef=  this.dialog.open(DialogResultUpdateUserDialog,{
            width: '400px',
          });
            this.dataService.listUsers({user_id: JSON.parse(localStorage.getItem('currentUser')).id}).subscribe(result => {
            this.users = result.data;
            }, err => {
              console.log(err);
            });
            dialogRef.componentInstance.resultMsg = 'delete';
          }
      }, err => {
        console.log(err);
      });
      }
  });
}
}
@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: 'dialog-edit-dialog.html',
  styleUrls: ['dialogEdit.component.css'],
  providers:[DataService],
})
export class DialogResultEditDialog {
   @ViewChild('test') el: ElementRef;
  form:FormGroup;
  public model: any={};
  // public model:any={};
  public user_id:any;
  public check:any;
  user: any = [];
  updateuser:any=[];
  public errorMsg:any=0;
  loadSpiner:boolean=true;
  Role= [
    'Permanent',
    'Trainee',
    'Summer Trainee',
  ];
  status:any=[
    'Active',
    'Not Active',
  ]
  constructor(public dialog: MdDialog,private domSanitizer: DomSanitizer,public dialogRef: MdDialogRef<DialogResultEditDialog> , private dataService: DataService) {}

  ngOnInit() {
    console.log(this.check);
    this.getUserdata(this.user_id);
    this.form = new FormGroup({
      'first_name':new FormControl('',[
          Validators.required,
      ]),
      'last_name':new FormControl('',[
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
      'emp_role':new FormControl(''),
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
      'laptop_no' : new FormControl('not allocated',[
                  Validators.required]),
      'mouse_no' : new FormControl('not allocated'),
      'keyboard_no' : new FormControl('not allocated'),
      'company_name':new FormControl(''),
      'leaving_date':new FormControl(''),
      'ctc':new FormControl(''),
      'TL_no':new FormControl(''),
      'HR_no':new FormControl(''),
      'cur_country': new FormControl(''),
      'per_country': new FormControl(''),


    });
  }

  getUserdata(id:any){
    // console.log(id);
    this.dataService.UserData({emp_user_id: id}).subscribe(result => {
      this.user = result.data;
      this.loadSpiner=false;
      // console.log(this.user.profile_pic);
      console.log(this.user);
      if(this.user){
        // console.log(this.user.leaving_date);
        this.model.first_name = this.user.emp_fname;
        this.model.last_name  =this.user.emp_lname;
        this.model.mob_no   =this.user.mob_no;
        this.model.emergency_cont_person =this.user.emergency_cont_person;
        this.model.emergency_cont_no  =this.user.emergency_cont_no;
        this.model.status  =this.user.status;
        this.model.emp_role  =this.user.employee_role;
        this.model.join_date= this.user.join_date;
        this.model.service_cont_end=this.user.service_cont_end;
        this.model.email=this.user.email;
        this.model.username=this.user.username;
        this.model.password=this.user.password;
        this.model.cur_address  =this.user.cur_address;
        this.model.cur_city  =this.user.cur_city;
        this.model.cur_pincode  =this.user.cur_pincode;
        this.model.per_address  =this.user.per_address;
        this.model.per_city   =this.user.per_city;
        this.model.per_pincode =this.user.per_pincode;
        this.model.laptop_no  =this.user.laptop_no;
        this.model.mouse_no   =this.user.mouse_no;
        this.model.keyboard_no  =this.user.keyboard_no;
        this.model.profile_pic = this.user.profile_pic;
        this.model.cur_country = this.user.cur_country;
        this.model.per_country = this.user.per_country;
        // this.model.profile_pic = this.user.profile_pic.substring(this.user.profile_pic.indexOf(";base64,")+";base64".length+1);
        // console.log(this.model.profile_pic);
        if(this.user.company_name){
        this.model.company_name=this.user.company_name;
      }
        if(this.user.leaving_date){
        this.model.leaving_date=this.user.leaving_date;
      }
      if(this.user.CTC){
        this.model.ctc=this.user.CTC;
      }
      if(this.user.TL_no){
        this.model.TL_no=this.user.TL_no;
      }
      if(this.user.HR_no){
        this.model.HR_no=this.user.HR_no;
      }
        // delete this.model.doc;
        // console.log(this.model[doc]);
        if(this.model.status == true){
            this.model.status ='Active';
        }
        else{
            this.model.status='Not Active';
        }
    }
      // console.log(this.user);
    }, err => {
      console.log(err);
    });
  }
  changeListener($event) : void {             //image
      this.readThis($event.target);
      // console.log($event.target);
  }
  readThis(inputValue: any ) : void {           //image
      var file:File = inputValue.files[0];
      // console.log(file.size);
      if(file.size<= 71680){
      var myReader:FileReader = new FileReader();
      // console.log(data);
      if(file.type=='image/jpeg' || file.type=='image/png'){
      this.model.profile_pic = 'data:' + file.type + ';base64,';//file name
      this.errorMsg = 0;
    }
    else{
      this.errorMsg="image type should be png and jpg type";
    }
      myReader.onloadend = this._handleReaderImageLoaded.bind(this);
      myReader.readAsBinaryString(file);
    }
    else{
      this.errorMsg = "image size is less than 70 KB"
    }
  }
  _handleReaderImageLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.model.profile_pic = this.model.profile_pic + btoa(binaryString);
        // console.log(this.model.profile_pic);
          // console.log(this.model);

        // this.showImage = true;
  }
  downloadprview(){
    let printContents, popupWin;
     printContents = document.getElementById('previewDownload').innerHTML;
     popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
     popupWin.document.open();
     popupWin.document.write(`
       <html>
         <head>
           <title>Print tab</title>
           <style>
           //........Customized style.......
           </style>
         </head>
     <body onload="window.print();window.close()">${printContents}</body>
       </html>`
     );
     popupWin.document.close();
  }

  onSubmit(){
    // console.log(this.model);
    if(!this.model.leaving_date){
      delete this.model.leaving_date;
    }
    if(!this.model.HR_no){
      delete this.model.HR_no;
    }
    if(!this.model.TL_no){
      delete this.model.TL_no;
    }
    // console.log(this.model);
      if(this.model.first_name && this.model.last_name && this.model.mob_no && this.model.emergency_cont_person && this.model.emergency_cont_no  ){
          // console.log(this.user_id);
          // console.log("this.model.userId")
          this.model.emp_user_id=this.user_id
          if(this.model.status =='Active'){
              this.model.status =true;
          }
          else{
              this.model.status=false;
          }
          // console.log(this.model);
          this.dataService.UpdateData(this.model).subscribe(result => {
          this.updateuser = result.message;
           let dialogRef= this.dialog.open(DialogResultUpdateUserDialog,{
            // height: '400px',
            width: '400px',
            // background:#9C27B0,
          });
          dialogRef.afterClosed().subscribe(result => {
          });
          dialogRef.componentInstance.resultMsg = this.updateuser;
        }, err => {
          console.log(err._body);

        });
    }
  }
}
@Component({
  selector: 'dialog-Update-message-dialog',
  templateUrl: 'dialog-Update-message-dialog.html',
})
export class DialogResultUpdateUserDialog {
  resultMsg:any;
  constructor(public dialog: MdDialog,public dialogRef: MdDialogRef<DialogResultEditDialog>){}
}
@Component({
  selector: 'dialog-confirm-dialog',
  templateUrl: 'dialog-confirm-dialog.html',
})
export class DialogConfirmDialog {
  resultMsg:any;
  constructor(){}
}
