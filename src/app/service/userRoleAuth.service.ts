import { Injectable } from '@angular/core';
@Injectable()
export class UserRoleAuth{
  public role ={
    admin :0,
    hr :0,
    employee :0,
    account :0,
  };
  public user:any;
  constructor(){
    this.user= JSON.parse(localStorage.getItem('currentUser'));
  }
  roleCheck(){
    if(this.user.role == 'admin'){
        this.role.admin=1;
        this.role.hr=1;
        this.role.employee=1;
        this.role.account=1;
        // console.log(this.role);
    }
    if(this.user.role == 'hr'){
        this.role.admin=0;
        this.role.hr=1;
        this.role.employee=1;
        this.role.account=1;
        // console.log(this.role);
    }
    if(this.user.role == 'employee'){
        this.role.admin=0;
        this.role.hr=0;
        this.role.employee=1;
        // console.log(this.role);
    }
    return this.role;
  }
}
