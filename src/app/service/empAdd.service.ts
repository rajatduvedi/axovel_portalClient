import{ Injectable } from '@angular/core';
import{ Http , Response , Headers} from '@angular/http';
import{ Observable }from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from '../user';
import{ EmployeeDetails } from '../employeeDetails';
@Injectable()
export class EmpAddService{
  private dataurl='http://192.241.153.62:1223/api/addEmpDetail';
  // private loginurl='http://localhost:8000/apis/login';
  constructor( private http:Http){}
  empAddDetails(item:any) {
    // console.log( item.doc[0]);
        let body = '';

        for(let entry in item) {
          if(item[entry].constructor === Array){
              for(let i=0;i<item[entry].length;i++){
                  body += entry + '=' + encodeURIComponent(item[entry][i]) + '&';
              }
          }
          else{
            body += entry + '=' + encodeURIComponent(item[entry]) + '&';
          }
        }
        body = body.substring(0, body.length-1);
        console.log("service file");
        console.log(body);
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(this.dataurl, body, {headers: headers})
        .map((res: Response) => {
            return res.json();
        });
    }


    // gotonextStep(){
    //
    // }
}
