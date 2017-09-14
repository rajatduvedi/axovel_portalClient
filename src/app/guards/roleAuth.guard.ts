import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class RoleAuthGuard implements CanActivate {

    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(JSON.parse(localStorage.getItem('currentUser')).role == 'hr' || JSON.parse(localStorage.getItem('currentUser')).role=='admin' ){
        return true;
      }
      else{
        this.router.navigate(['/dashboard/#']);
        return false;
      }
    }
}
