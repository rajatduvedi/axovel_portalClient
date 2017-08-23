import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import{ User } from '../user';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [UserService , User]
})
export class HeaderComponent implements OnInit {
  public user:any;
  constructor(private userservice: UserService,private router: Router) { }

  ngOnInit() {
    this.user= JSON.parse(localStorage.getItem('currentUser'));
  }
  logout(){
    // alert("hello");
    this.userservice.logout();
      this.router.navigate(['login']);
  }
}
