import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UserService {
  
  isAdmin: boolean = false;
  onAdminStateChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() {
  }
  
  /**
   * set isAdmin
   * 
   * @param {boolean} isAdmin
   * 
   * @memberOf UserService
   */
  setAdmin( isAdmin: boolean ) {
    this.isAdmin = isAdmin;
    this.onAdminStateChange.emit(this.isAdmin);
  }
  
  /**
   * get isAdmin
   * 
   * @returns {boolean}
   * 
   * @memberOf UserService
   */
  getAdmin(): boolean {
    return this.isAdmin;
  }
  
  /**
   * Return EventEmitter which is fire when isAdmin change
   * 
   * @returns
   * 
   * @memberOf UserService
   */
  getOnAdminStateChange() {
    return this.onAdminStateChange;
  }
  
}
