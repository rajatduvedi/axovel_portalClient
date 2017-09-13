import{ Injectable } from '@angular/core';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from '../user';
import{ EmployeeDetails } from '../employeeDetails';
@Injectable()
export class UserService{
    // private options: any;
  private dataurl='http://localhost:8000/apis/register';
  private loginurl='http://192.241.153.62:1223/api/login';
  private forgotPasswordUrl= 'http://192.241.153.62:1223/api/forgotPassword';
  private resetPasswordUrl= 'http://192.241.153.62:1223/api/resetPassword';
  constructor( private http:Http){}
  userRegister(item:any) {
        let body = '';
        for(let entry in item) {
            body += entry + '=' + encodeURIComponent(item[entry]) + '&';
        }
        body = body.substring(0, body.length-1);
        // console.log(body);
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
      // console.log(body);
      let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

      return this.http.post(this.loginurl, body, {headers: headers})
      .map((res: Response) => {
        let user = res.json();
        // console.log("service");
        // console.log(user.data);
        // if(user.data){
        //   );
        // }
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
    forgotPassword(item:any){
      let body = '';
      for(let entry in item) {
          body += entry + '=' + encodeURIComponent(item[entry]) + '&';
      }
      body = body.substring(0, body.length-1);
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post(this.forgotPasswordUrl, body, {headers: headers})
      .map((res: Response) => {
          return res.json();
      });
    }
    resetPassword(item:any){
      let body = '';
      for(let entry in item) {
          body += entry + '=' + encodeURIComponent(item[entry]) + '&';
      }
      body = body.substring(0, body.length-1);
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      return this.http.post(this.resetPasswordUrl, body, {headers: headers})
      .map((res: Response) => {
          return res.json();
      });
    }
}
