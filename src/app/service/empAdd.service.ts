import{ Injectable } from '@angular/core';
import{ Http , Response , Headers ,  RequestOptions} from '@angular/http';
import{ Observable }from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from '../user';
import{ EmployeeDetails } from '../employeeDetails';
@Injectable()
export class EmpAddService{
  private dataurl='http://192.241.153.62:1223/api/addEmpDetail';
  private emailCheckUrl='http://192.241.153.62:1223/api/checkEmail';
  private userCheckUrl='http://192.241.153.62:1223/api/checkUsername';
  private options: any;
  // private loginurl='http://localhost:8000/apis/login';
  constructor( private http:Http){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: headers });
  }
  empAddDetails(item:any) {
        let body = '';

        for(let entry in item) {
          // console.log(typeof(item[entry]));
          if(item[entry]== 'NULL' || typeof item[entry]==='undefined' || item[entry]===""){
            console.log("leaving_date")
            delete item[entry];
          }
          else{
          // console.log((item[entry]))
          if(item[entry].constructor === Array){
              for(let i=0;i<item[entry].length;i++){
                  body += entry + '=' + encodeURIComponent(item[entry][i]) + '&';
              }
          }
          else{
            body += entry + '=' + encodeURIComponent(item[entry]) + '&';
          }
        }
        }
        body = body.substring(0, body.length-1);
        // console.log("service file");
        // console.log(typeof item.joinDate)
        // console.log(item);
        // console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.dataurl, body, {headers: headers})
        .map((res: Response) => {
            return res.json();
        });
    }
    emailCheck(item:any){
      let params = new URLSearchParams();
      for(let key in item){
        params.set(key, item[key])
      }
      return this.http
        .post(this.emailCheckUrl, params.toString(), this.options)
        .map((response: Response) => {
          return response.json();
        });
    }
    userCheck(item:any){
      let params = new URLSearchParams();
      for(let key in item){
        params.set(key, item[key])
      }
      return this.http
        .post(this.userCheckUrl, params.toString(), this.options)
        .map((response: Response) => {
          return response.json();
        });
    }
    }


    // gotonextStep(){
    //
    // }
