import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { HttpModule,Headers , XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
    providers: [UserService]
})
export class ForgotPasswordComponent implements OnInit {
  public model: any={};
  public step2: boolean= true;
  public ErrorMsg:any;
  constructor(private userservice: UserService,private router: Router) {
    // let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });

  }

  ngOnInit() {
    // console.log(headers.append('X-CSRFToken', this.getCookie('csrftoken')));
    console.log(new CookieXSRFStrategy(this.getCookie('csrftoken'), 'X-CSRFToken'))
    // console.log(document.cookie)
  }
  getCookie(name) {
   let value = "; " + document.cookie;
   let parts = value.split("; " + name + "=");
   if (parts.length == 2)
     return parts.pop().split(";").shift();
 }
  emailFormControl = new FormControl('', [
  Validators.required,
  Validators.pattern(EMAIL_REGEX)]);
  passwordFormControl = new FormControl('', [
  Validators.required]);

  forgotPassword(){
    if(this.model.email){
    console.log({email:this.model.email })
    this.userservice.forgotPassword({email:this.model.email }).subscribe(data=>{
      this.step2 = false;
      console.log(data);
    }, error => {
        this.ErrorMsg=JSON.parse(error._body).message;
    }
  );
  }
}
ResendCode(){
  this.userservice.forgotPassword({email:this.model.email }).subscribe(data=>{
    // this.step2 = false;
    console.log(data);
  }, error => {
      // this.ErrorMsg=JSON.parse(error._body).message;
  }
);
}
  otpsubmit(){
    // console.log(this.model.otp)
    if(this.model.reset_code){
    // console.log({email:this.model.email })
    this.userservice.resetPassword({email:this.model.email , reset_code:this.model.reset_code , password:this.model.password}).subscribe(data=>{
      // this.step2 = false;
      console.log(data);
      if(data){
        this.router.navigate(['dashboard']);
      }
    }, error => {
      console.log(error)
        this.ErrorMsg=JSON.parse(error._body).message;
    }
  );
  }
  }
  touchInput(){
    console.log("hello")
      this.ErrorMsg='';
  }

}
