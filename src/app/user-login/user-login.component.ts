import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import{ User } from '../user';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  // selector: 'app-user-login',
  moduleId: module.id,
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
    providers: [UserService , User]
})
export class UserLoginComponent implements OnInit {
  id: any;
  checkregmsg:any;
  checkloginErrorMsg:any;
  public model = {
   loginId: '',
   password:''
 } ;

  constructor(private userservice: UserService,private checkuser:User, private router: Router , private routes : ActivatedRoute){
     }
     ngOnInit() {
       if(localStorage.getItem('currentUser')){
         this.router.navigate(['dashboard/#']);
       }
     }

    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
    passwordFormControl = new FormControl('', [
    Validators.required]);

   userLogin() {
    if(this.model.loginId && this.model.password){
     this.userservice.login(this.model).subscribe(data =>
        {
          if(data.data){
            localStorage.setItem('currentUser', JSON.stringify(data.data));
            this.router.navigate(['/dashboard/#']);
          }
        }, error => {
              console.log(error)
              // console.log(error._body.data);
              this.checkloginErrorMsg=JSON.parse(error._body).message;
              console.log(this.checkloginErrorMsg)
        });
   }
// this.router.navigate(['dashboard']);
}
}
