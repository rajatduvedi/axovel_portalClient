import { Component,OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router,ActivatedRoute } from '@angular/router';
import{ User } from '../user';



const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  moduleId: module.id,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService , User]
})
 export class LoginComponent implements OnInit {
   id: any;
   checkregmsg:any;
   public model = {
    email: '',
    password:''
  } ;
  // public checkuser:Checkuser[]=[];

  constructor(private userservice: UserService,private checkuser:User, private router: Router , private routes : ActivatedRoute){
    this.id = this.routes.snapshot.params['id'];
    if(this.id=='x'){
      this.checkregmsg= 1;
    }
    console.log(this.id);
     }
     ngOnInit() {
       if(localStorage.getItem('currentUser')){
         this.router.navigate(['dashboard'])
       }
     }

  emailFormControl = new FormControl('', [
   Validators.required,
   Validators.pattern(EMAIL_REGEX)]);

   userLogin() {
     this.userservice.login(this.model).subscribe(data =>
        {
          // this.checkuser=data;
          this.checkuser=data;
          // console.log(data);
          if(this.checkuser.id){
            alert("yes locked!!!!!");
            this.router.navigate(['dashboard']);
            console.log("locked")
          }
          else{
            alert(this.checkuser.error);
          }
        }, error => {console.log(error);
        });
   }
 }
