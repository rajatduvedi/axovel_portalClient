import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../user';
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
declare const FB: any;
@Component({
  // selector: 'app-user-login',
  moduleId: module.id,
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
  providers: [UserService, User]
})
export class UserLoginComponent implements OnInit {
  id: any;
  checkregmsg: any;
  checkloginErrorMsg: any;
  public model = {
    loginId: '',
    password: ''
  };
  token: any;
  loged: boolean = false;
  public user: any = {};
  constructor(private userservice: UserService, private router: Router, private routes: ActivatedRoute) {
    // (function(d, s, id) {
    //   var js, fjs = d.getElementsByTagName(s)[0];
    //   if (d.getElementById(id)) return;
    //   js = d.createElement(s); js.id = id;
    //   js.src = "//connect.facebook.net/en_US/sdk.js";
    //   fjs.parentNode.insertBefore(js, fjs);
    // }(document, 'script', 'facebook-jssdk'));
  }
  ngOnInit() {
    FB.init({
      appId: '1953730538228887', // App ID
      status: false,
      version: 'v2.10',
      cookie: true,
      xfbml: true  // parse XFBML
    });
    this.page()
    FB.getLoginStatus(function(response) {
    });
  }
  page(){
    if (localStorage.getItem('currentUser')) {
      // location.reload();
      this.router.navigate(['dashboard/#']);
    }
  }
  login(){
    FB.login((result: any) => {
      FB.api('/me?fields=id,name,first_name,gender,picture.width(150).height(150),age_range',
        function(result) {
          if (result && !result.error) {
            this.user = result;
            localStorage.setItem('currentUser', JSON.stringify(this.user));
          } else {
            console.log(result.error);
          }
          location.reload();
        });
          // this.page();
    }, { scope: 'user_friends' });

  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)]);
  passwordFormControl = new FormControl('', [
    Validators.required]);
  userLogin() {
    if (this.model.loginId && this.model.password) {
      this.userservice.login(this.model).subscribe(data => {
        if (data.data) {
          localStorage.setItem('currentUser', JSON.stringify(data.data));
          this.router.navigate(['/dashboard/#'])
        }

      }, error => {
        this.checkloginErrorMsg = JSON.parse(error._body).message;
      });
    }
  }
}
