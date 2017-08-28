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
  private DataUserUrl= 'http://192.241.153.62:1223/api/getEmpDetail';
  private updatedataurl= 'http://192.241.153.62:1223/api/editEmpDetail';
  private deletedataurl = 'http://192.241.153.62:1223/api/deleteEmp';
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
  UserData(user){
    let params = new URLSearchParams();
    for(let key in user){
      params.set(key, user[key])
    }
    return this.http
      .post(this.DataUserUrl, params.toString(), this.options)
      .map((response: Response) => {
        return response.json();
      });
  }
  UpdateData(item:any){
    let body = '';
    for(let entry in item) {
        body += entry + '=' + encodeURIComponent(item[entry]) + '&';
    }
    body = body.substring(0, body.length-1);
    console.log("body");
    console.log(body);
    let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.updatedataurl, body, {headers: headers})
    .map((res: Response) => {
        return res.json();
    });
  }
  deleteUserRow(item:any){
    let body = '';
    console.log(item)
    for(let entry in item) {
        body += entry + '=' + encodeURIComponent(item[entry]) + '&';
    }
    body = body.substring(0, body.length-1);
    console.log("body");
    console.log(body);
    let headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

    return this.http.post(this.deletedataurl, body, {headers: headers})
    .map((res: Response) => {
        return res.json();
    });
  }
}
