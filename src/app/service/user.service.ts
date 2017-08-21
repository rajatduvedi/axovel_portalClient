import{ Injectable } from '@angular/core';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from '../user';
import{ EmployeeDetails } from '../employeeDetails';
@Injectable()
export class UserService{
  private dataurl='http://localhost:8000/apis/register';
  private loginurl='http://localhost:8000/apis/login';
  constructor( private http:Http){}
  userRegister(item:any) {
        let body = '';
        for(let entry in item) {
            body += entry + '=' + encodeURIComponent(item[entry]) + '&';
        }
        body = body.substring(0, body.length-1);
        console.log(body);
        let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(this.dataurl, body, {headers: headers})
        .map((res: Response) => {
            return res.json();
        });
    }
    login(item:any){
      let body = '';
      for(let entry in item) {
          body += entry + '=' + encodeURIComponent(item[entry]) + '&';
      }
      body = body.substring(0, body.length-1);
      console.log(body);
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this.http.post(this.loginurl, body, {headers: headers})
      .map((res: Response) => {
        let user = res.json();
        if(user){
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });

    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
    sendDataNextStep(item:any){
        // console.log("hello");
        // console.log(item);
        return item;
    }
    // gotonextStep(){
    //
    // }
}
