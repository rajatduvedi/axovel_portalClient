import { Component, OnInit, EventEmitter , Output} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { UserService } from '../../service/user.service';
import { EmpAddService } from '../../../service/empAdd.service';
import { FormBuilder, FormControl,Validators, FormArray, FormGroup } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import{ EmployeeDetails } from '../../../employeeDetails';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const M0B_REGEX = /^[0-9]*$/i;
const NAME_REGEX = /^[a-zA-Z][a-zA-Z ]+/ ;
const PIN_REGEX = /^[0-9]*$/i;
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
    moduleId: module.id,
    templateUrl: './addEmpDOCDetails.component.html',
    styleUrls: ['./addEmpDOCDetails.component.css'],
    providers:[EmpAddService],
})
export class AddEmpDOCDetailsComponent implements OnInit {
    @Output() onFileSelect: EventEmitter<File[]> = new EventEmitter();
    private _files: File[];
    invoiceForm: FormGroup;
    form: FormGroup;
    errors:any = [];
    public checkMsg:any;
    checkAddErrorMsg:any;
showImage: boolean = false;
    public model: any={
    };
    public arraydataName:any=[];
    public arraydata:any=[];
    public arraydoc:any=[];
    public doc:any;
    public index:any;
    public sucessCheck:any;
    public dateerror:boolean =true;
    public previewPage:any=0;
    checked = 0;
    minDate=new Date();
    // minDate=new Date(this.model.joinDate);
    Role= [
      'Permanent',
      'Trainee',
      'Summer Trainee',
    ];
    status:any=[
      'Active',
      'Not Active',
    ]
    public upload:FileUploader= new FileUploader({url:""});
    get fileCount(): number { return this._files && this._files.length || 0; }
constructor( private router: Router,private empAddService :EmpAddService , private _fb: FormBuilder ) {
    this.createForm();
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
    const str: string[] = this.model.joinDate.split('-');
    const strEnd:string[]= this.model.service_cont_end.split('-');

    this.model.joinDate = new Date(+str[2].slice(0,2), +str[1], +str[0]);
    this.model.service_cont_end = new Date(+strEnd[2].slice(0,2), +strEnd[1], +strEnd[0]);
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()]) // here
    });
    this.form = this._fb.group({
      'emailFormControl': new FormControl({value: this.model.email, disabled: true}, Validators.required),

      'usernameFormControl': new FormControl({value: this.model.username, disabled: true}, Validators.required
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
      'passwordFormControl': new FormControl({value: this.model.password, disabled: true}, Validators.required),
      // 'ConfirmPasswordFormControl': new FormControl('', [
      //     Validators.required,
      //     Validators.minLength(6)]),
      'mob_noFormControl' : new FormControl('', [
          Validators.required,
          Validators.pattern(M0B_REGEX)]),
      'emp_role' : new FormControl(''),
      'status' : new FormControl(''),

      'joinDate' : new FormControl(this.model.joinDate,[
          Validators.required]),
      'serviceEnd' : new FormControl(this.model.service_cont_end,[
          Validators.required]),
      'peraddFormControl' : new FormControl('', [
          Validators.required]),
      'peraddcityFormControl' : new FormControl('', [
          Validators.required]),
      'peraddpinFormControl' : new FormControl('', [
          Validators.required ,
          Validators.pattern(PIN_REGEX)]),
      'peraddcountryFormControl' : new FormControl('', [
          Validators.required]),
      'curaddFormControl' :new FormControl('', [
          Validators.required]),
      'curaddcityFormControl': new FormControl('', [
          Validators.required]),
      'curaddpinFormControl' : new FormControl('', [
          Validators.required ,
          Validators.pattern(PIN_REGEX)]),
      'curaddcountryFormControl' :new FormControl('', [
          Validators.required]),
      'laptop_no' : new FormControl('not allocated',[
                  Validators.required]),
      'mouse_no' : new FormControl('not allocated'),
      'keyboard_no' : new FormControl('not allocated'),
      'company_name':new FormControl('this.model.company_name'),
      'leaving_date':new FormControl('this.model.leaving_date'),
      'ctc':new FormControl('null'),
      'hr_noFormControl':new FormControl(''),
      'tl_noFormControl':new FormControl('this.model.TL_no'),
    });
    this.minDate = new Date(this.model.joinDate)
}
initItemRows() {
    return this._fb.group({
        // list all your form controls here, which belongs to your form array
        itemname: [''],
    });
}
createForm(){
    this.invoiceForm = this._fb.group({
        itemRows: this._fb.array([])
    });
    this.invoiceForm.setControl('itemRows', this._fb.array([]));
}
get itemRows(): FormArray {
    return this.invoiceForm.get('itemRows') as FormArray;
}

addNewRow(){
  // this.itemRows.push(this._fb.group(itemrow));
  // control refers to your formarray
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    // add new formgroup
    control.push(this.initItemRows());
}
deleteRow(index: number) {
// control refers to your formarray
    const control = <FormArray>this.invoiceForm.controls['itemRows'];
    // remove the chosen row
    control.removeAt(index);
    this.arraydoc.splice(index,1);
    this.arraydataName.splice(index,1);
}
gotonextStep(){
    var i=0;
    for( let data of this.itemRows.value)
    {
      if(data.itemname && this.arraydoc[i]){
        if(this.arraydataName[i]){
          this.arraydataName[i] = data.itemname;
        }else{
      this.arraydataName.push(data.itemname);
      this.checkMsg=0;
    }
    }
    else{
      this.checkMsg="fill all labels and related document field"
    }
        i++;
    }
      if(this.arraydataName.length == this.arraydoc.length){
      this.previewPage=1;
      this.model.doc_name = this.arraydataName;//label name
      this.model.doc=this.arraydoc;//docunt
      console.log(this.model)
    //   this.empAddService.empAddDetails(this.model).subscribe(data=>{
    //     if(data){
    //     this.checkMsg=data.message;
    //   }
    //   }, error => {
    //     // console.log(error);
    //   }
    // );


  }
}
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
onSubmitPreview(){
  console.log(this.model)
  this.empAddService.empAddDetails(this.model).subscribe(data=>{
    if(data){
    this.checkMsg=data.message;
  }
  }, error => {
    // console.log(error);
  }
);
}
gotoprevStep(){
    this.router.navigate(['dashboard/add-step4']);
}
previewImage($event) {
    this._files = $event.srcElement.files;
    this.onFileSelect.emit(this._files);
}
changeListener($event) : void {             //image
    this.readThis($event.target);
    // console.log($event.target);
}
changeList($event,index:any):void{
    this.readdocThis($event.target,index);
}

readThis(inputValue: any ) : void {           //image
    var file:File = inputValue.files[0];
    // console.log(file.type);
    var myReader:FileReader = new FileReader();
    // console.log(data);
    if(file.type=='image/jpeg' || file.type=='image/png'){
    this.model.profile_pic = 'data:' + file.type + ';base64,';//file name
  }
    myReader.onloadend = this._handleReaderImageLoaded.bind(this);
    myReader.readAsBinaryString(file);
}
readdocThis(inputValue: any, index:any) : void {  //file upload
    var file:File = inputValue.files[0];
    // console.log(inputValue.files[0]);
    var myReader:FileReader = new FileReader();
    if(file.type=='application/pdf'){
      this.doc = file.name+'data:' + file.type + ';base64,';
      this.index=index;
      myReader.onloadend = this._handleReaderLoaded.bind(this);
      // console.log(this.arraydoc);
      myReader.readAsBinaryString(file);
    }
}
_handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;

      this.doc = this.doc + btoa(binaryString);
      if(!this.arraydoc[this.index]){
        this.arraydoc.push(this.doc);
      }
      else {
        this.arraydoc[this.index]=this.doc;
      }
      this.showImage = true;

}
_handleReaderImageLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.model.profile_pic = this.model.profile_pic + btoa(binaryString);
      // console.log(this.model.profile_pic);
        // console.log(this.model);

      this.showImage = true;
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
}
