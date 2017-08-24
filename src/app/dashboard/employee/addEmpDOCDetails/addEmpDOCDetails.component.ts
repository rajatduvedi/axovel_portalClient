import { Component, OnInit, EventEmitter , Output} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
// import { UserService } from '../../service/user.service';
import { EmpAddService } from '../../../service/empAdd.service';
import { FormBuilder, FormControl, FormArray, FormGroup } from '@angular/forms';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import{ EmployeeDetails } from '../../../employeeDetails';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';

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
    errors:any = [];
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
    public upload:FileUploader= new FileUploader({url:""});
    get fileCount(): number { return this._files && this._files.length || 0; }
constructor( private router: Router,private empAddService :EmpAddService , private _fb: FormBuilder) {
    this.createForm();
}

ngOnInit() {
    this.model = JSON.parse(localStorage.getItem('empDetails'));
    this.invoiceForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRows()]) // here
    });
}
initItemRows() {
    return this._fb.group({
        // list all your form controls here, which belongs to your form array
        itemname: [''],
        // item:[''],
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
}
gotonextStep(){
    for( let data of this.itemRows.value)
    {
      this.arraydataName.push(data.itemname);
      this.arraydata.push(data.item);
    }
      // console.log(this.arraydata);
      this.model.doc_name = this.arraydataName;//label name
      this.model.doc=this.arraydoc;//docunt
      localStorage.setItem('empDetails', JSON.stringify(this.model));
      this.model = JSON.parse(localStorage.getItem('empDetails'));
      this.empAddService.empAddDetails(this.model).subscribe(data=>{
        console.log(data);
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
changeListener($event) : void {
    this.readThis($event.target);
    // console.log($event.target);
}
changeList($event,index:any):void{
    this.readdocThis($event.target,index);
}

readThis(inputValue: any ) : void {
    var file:File = inputValue.files[0];
    // console.log(file.type);
    var myReader:FileReader = new FileReader();
    // console.log(data);
    if(file.type=='image/jpeg' || file.type=='image/png'){
    this.model.image = 'data:' + file.type + ';base64,';//file name
  }
    myReader.onloadend = this._handleReaderLoaded.bind(this);
    myReader.readAsBinaryString(file);
}
readdocThis(inputValue: any, index:any) : void {  //file upload
    var file:File = inputValue.files[0];
    // console.log(file.type);
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
      this.model.image = this.model.image + btoa(binaryString);
      this.doc = this.doc + btoa(binaryString);
      if(!this.arraydoc[this.index]){
        this.arraydoc.push(this.doc);
      }
      else{
        this.arraydoc[this.index]=this.doc;
      }
      this.showImage = true;
}
}
