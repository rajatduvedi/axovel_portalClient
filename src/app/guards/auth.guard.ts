import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
    isAuthorized(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(JSON.parse(localStorage.getItem('currentUser')).role == 'hr' || JSON.parse(localStorage.getItem('currentUser')).role=='admin' ){
        return true;
      }
      else{
        this.router.navigate(['/dashboard']);
        return false;
      }
    }
}
