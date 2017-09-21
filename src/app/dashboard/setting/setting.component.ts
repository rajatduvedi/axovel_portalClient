import { Component, OnInit } from '@angular/core';
import {FormControl, Validators , NgForm, FormGroup, FormBuilder,} from '@angular/forms';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
  providers: [UserService]
})
export class SettingComponent implements OnInit {
  form: FormGroup;
  confirmPassword:any;
  user_email:any;
  respMsg:any;
  loadSpiner:boolean=true;
  constructor(private formBuilder: FormBuilder , private userservice: UserService) { }

  ngOnInit() {
    this.user_email = JSON.parse(localStorage.getItem('currentUser')).email;
      this.form = this.formBuilder.group({
        'CurrentPassword': new FormControl('', [
            Validators.required,
            Validators.minLength(6)]),
        'password': new FormControl('', [
            Validators.required,
            Validators.minLength(6)]),
        'ConfirmPassword': new FormControl('', [
            Validators.required,
            Validators.minLength(6)]),
      })
  }
  passwordInput(){
    if( this.form.value.password == this.form.value.ConfirmPassword)
        {
           this.confirmPassword = 1;
        }
      else{
           this.confirmPassword = 0;
         }
  }
  OldpasswordInput(){
    this.respMsg='';
  }
  onblurPassword(){
    this.respMsg=''
    if(this.confirmPassword){
        document.getElementById("confirm").style.display='none';
      }
  }
  changePassword(){
      this.loadSpiner=false;
      this.userservice.changePassword({email:this.user_email,old_password:this.form.value.CurrentPassword , new_password:this.form.value.password})
      .subscribe(result=>{
        setTimeout (() => {
            this.loadSpiner=true;
        }, 1000)
        this.respMsg = result.message;
      },err=>{
        this.loadSpiner=true;
        // console.error(err)
        this.respMsg=JSON.parse(err._body).message;
      });
  }
}
