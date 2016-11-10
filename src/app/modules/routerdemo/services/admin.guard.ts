import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from "@angular/router";
import { Observable } from "rxjs";
import { UserService } from "./user.service";
import { ChangeCmp } from "../models/change-cmp";

@Injectable()
export class AuthAdminActivateGuard implements CanActivate {
  
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> | Promise<boolean>|boolean {
    console.log('AuthAdminService#canActivate called');
    
    let isAdmin = this.checkUserAuth();
    console.log("isAdmin=", isAdmin);
    console.log(this.router);
    console.log(state.url);
    if(!isAdmin 
    && (this.router.url === state.url || this.router.url === "/")){
      this.router.navigate(['/router']); 
    }

    return isAdmin;
  }
  
  constructor( private userService: UserService, private router: Router ) {
  }
  
  /**
   * Return true if user is authenticate as admin
   * 
   * @returns {boolean}
   * 
   * @memberOf AuthAdminActivateGuard
   */
  checkUserAuth(): boolean {
    let isAdmin = this.userService.getAdmin();
    
    return isAdmin;
  }
}

@Injectable()
export class ConfirmAdminDeactivateGuard implements CanDeactivate<ChangeCmp> {

  canDeactivate(target: ChangeCmp) {
    console.log(target);
    if(target.hasChanges() && this.userService.isAdmin){
        return window.confirm('Are you sure to leave this page ?');
    }
    return true;
  }
  
  
  constructor( private userService: UserService, private router: Router ) {}
}
