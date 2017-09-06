import { Component, OnInit ,  ViewChild,Input,
trigger, state, style, transition, animate , ElementRef} from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {MdSidenav} from '@angular/material';

@Component({
  moduleId:module.id,
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css'],
  animations: [
    trigger('contentOffset', [
        state('open', style({ // sidenav open
          // 'transform': 'translate3d(0px, 0px, 0px)',
          // 'visibility': 'visible',
            'transition':'transform .100s cubic-bezier(.25,.8,.25,1)'
        })),
        state('close', style({ //sidenav closed
            'width':'88px',
            'visibility':'visible',
            'transform':'translate3d(0,0,0)',
        })),
        transition('remove <=> add', animate('1ms ease'))
    ]),
    trigger('contentinerSet', [
        state('open', style({
            'margin-left': '0px',
        })),
        state('close', style({
            'margin-left': '86px',
            'transform': 'translate3d(0px, 0px, 0px)',
            // 'transform':'translate3d(-26%,0,0)',
        })),
        // transition('addOpen => removeClose', animate('1000ms ease'))
    ]),
]
})
export class DashBoardComponent implements OnInit {
  // @Input() Sidenav;
  @ViewChild('sidenav') sidenav:MdSidenav;
  contentOffsetStatus:string = 'open';
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
  constructor(private router: Router , private elRef:ElementRef) { }

  ngOnInit() {

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
    this.contentOffsetStatus = ( this.contentOffsetStatus === 'open' ? 'close' : 'open' );
    if(this.contentOffsetStatus == 'close'){// if sidenav close then open it
      this.contentinerSetStatus ='close';
      // document.getElementById('contentSideNav').style.visibility='visible';
      this.Checksidebar=1;
    }
    else{
      this.Checksidebar=0;
      // document.getElementsByClassName("mat-sidenav-content").style.display = "hidden";
      // var div = this.elRef.nativeElement.querySelector('div');
      // console.log(div);
      // var x = document.querySelectorAll(".mat-drawer-content");
      // console.log(x);
      // x.setAttribute("style", "color: blue, margin-top:5px");
      // x[0].css(background="red");

      this.contentinerSetStatus='open'
    }
    this.sidenav.toggle();//
        // document.getElementsByClassName("mat-sidenav.mat-sidenav-closed").style.visibility="visible";
  }

}
