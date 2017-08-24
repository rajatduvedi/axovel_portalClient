import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { EmployeeDetails } from '../employeeDetails';
@Injectable()
export class DataService{
  private listUsersUrl= 'http://192.241.153.62:1223/api/listEmp';
  private options: any;
  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private http: Http){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: headers });
  }
  // getData(): Observable<EmployeeDetails[]> {
  //     return this.http.get(this.dataurl)
  //             .map((response : Response)=> <EmployeeDetails[]> response.json());
  //             // .do(resData => console.log(JSON.stringify(resData)));
  // }
  listUsers(user) {
    let params = new URLSearchParams();
    for(let key in user){
      params.set(key, user[key])
    }
    return this.http
      .post(this.listUsersUrl, params.toString(), this.options)
      .map((response: Response) => {
        return response.json();
      });
  }
}
