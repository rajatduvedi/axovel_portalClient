import { Component,OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { UserService } from '../service/user.service';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
@Component({
  moduleId: module.id,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[UserService]
})
export class RegisterComponent implements OnInit{
  checkerrormsg:any;
  public msg={
    emailmsg: '',
    usermsg: '',
    statusmsg: '',
  }
  constructor(private userService: UserService,private router : Router){}
    public model = {
      email : '',
      username: '',
      password:'',
      check:'',

    } ;
    ngOnInit (){
      if(localStorage.getItem('currentUser')){
        this.router.navigate(['dashboard'])
      }
    }
    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.pattern(EMAIL_REGEX)]);
    nameFormControl = new FormControl('', [
      Validators.required]);

    createNewAccount(){
      if(this.model.username && this.model.email && this.model.password && this.model.check ){
      this.userService.userRegister(this.model).subscribe(data=>{
        // console.log(data);
        // console.log(data.status);
        // console.log(data.username);
        // console.log("asvdfashdgffahsgdfasgdfgasd")
        this.msg.usermsg = data.username;
        this.msg.emailmsg=data.email;
        this.msg.statusmsg=data.status;
        // console.log(this.msg.usermsg+'hjhgh');
        // console.log(this.msg.statusmsg);
        // console.log(this.msg.emailmsg);
        if(this.msg.statusmsg){
          this.msg.statusmsg='x';
          this.router.navigate(['login',this.msg.statusmsg]);
          alert("hello");
        }
        if(this.msg.usermsg){
            this.checkerrormsg= this.msg.usermsg;
        }
        else if(this.msg.emailmsg){
            this.checkerrormsg= this.msg.emailmsg;
        }
        // console.log(this.msg )
         },
        // error => { console.log(error)}
      );

    }
    else{
      console.log(this.model);
      alert("plse fill");
    }

      // <a href="google.com"></a>
    }
}
export interface Reg{
  username: any;
  email:any;
  status:any;
}
