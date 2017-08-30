import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  moduleId:module.id,
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  public user:any;
  public dashBoardCheck:any=1;
  public role ={
    admin :0,
    hr :0,
    employee :0,
    account :0,
  };
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.url);
    if(this.router.url == '/dashboard'){
      // alert("hello");
      this.router.navigate(['dashboard/#']);
    }
    // console.log(window.location.href)
    this.user= JSON.parse(localStorage.getItem('currentUser'));
    // console.log(this.user);
    if(this.user){
      this.router.navigate(['dashboard/#'])
    }
    else{
      this.router.navigate(['login'])
    }
    // console.log(this.user.id);

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
  }
  addEmp(){
        this.router.navigate(['dashboard/add']);
  }
  listEmp(){
        this.router.navigate(['dashboard/list']);
  }

}
