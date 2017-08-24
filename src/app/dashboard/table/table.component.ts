import {Component} from '@angular/core';
import { DataService } from '../../service/data.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  moduleId: module.id,
  selector: 'app-table',
  styleUrls: ['table.component.css'],
  templateUrl: 'table.component.html',
    providers:[DataService],
})
export class TableComponent {
  users: any = [];
  constructor(private dataService: DataService ) {
    // Fill up the database with 100 users.
    // for (let i = 0; i < 20; i++) { this.addUser(); }
  }
  ngOnInit(): void{
      this.getUsersList();
}
getUsersList() {
  this.dataService.listUsers({user_id: JSON.parse(localStorage.getItem('currentUser')).id}).subscribe(result => {
    this.users = result.data;
    console.log(this.users);
  }, err => {
    console.log(err);
  });
}

}
