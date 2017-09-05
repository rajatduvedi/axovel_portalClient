import { Component, OnInit ,  ViewChild,
trigger, state, style, transition, animate} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {MdSidenav} from '@angular/material';

@Component({
  moduleId:module.id,
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  animations: [
    trigger('contentOffset', [
        state('add', style({
            // 'margin-left': '20px',
            // 'background':'red'
            'transition':'transform .100s cubic-bezier(.25,.8,.25,1)'
        })),
        state('remove', style({
            // 'margin-left': '0',
            'width':'90px',
            'visibility':'visible',
            'transform':'translate3d(-26%,0,0)',
            // 'background':'blue'
        })),
        transition('remove => add', animate('1ms ease'))
    ]),
    trigger('contentinerSet', [
        state('addOpen', style({
            'margin-left': '65px',
            // 'background':'red'
        })),
        state('removeClose', style({
            // 'margin-left': '0px',
            // 'transform':'translate3d(0px,0px,0px)',
            // 'background':'red'
        })),
        // transition('addOpen => removeClose', animate('1000ms ease'))
    ]),
]
})
export class DashBoardComponent implements OnInit {
  @ViewChild('sidenav') sidenav:MdSidenav;
  contentOffsetStatus:string = 'add';
  contentinerSetStatus:string;
  public Checksidebar:any=0;
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
    // console.log(this.router.url);
    // if(this.router.url == '/dashboard'){
    //   // alert("hello");
    //   this.router.navigate(['dashboard/#']);
    // }
    // // console.log(window.location.href)
    // this.user= JSON.parse(localStorage.getItem('currentUser'));
    // // console.log(this.user);
    // if(localStorage.getItem('currentUser')){
    //   this.router.navigate(['dashboard/#'])
    // }
    // else{
    //   this.router.navigate(['login'])
    // }
    // console.log(this.user.id);

    this.user= JSON.parse(localStorage.getItem('currentUser'));

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
  sidebarToggle(){
    this.contentOffsetStatus = ( this.contentOffsetStatus === 'add' ? 'remove' : 'add' );
    if(this.contentOffsetStatus == 'remove'){
      this.contentinerSetStatus ='addOpen';
      this.Checksidebar=1;
    }
    else{
      this.Checksidebar=0;
      // document.getElementsByClassName("mat-sidenav-content").style.display = "hidden";
      this.contentinerSetStatus='removeClose'
    }
    this.sidenav.toggle();
        // document.getElementsByClassName("mat-sidenav.mat-sidenav-closed").style.visibility="visible";
  }

}
