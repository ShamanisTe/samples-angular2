import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class AppServiceService {
  
  private name: string = "Killian CHARPENTIER";
  private onNameChange = new EventEmitter();
  
  constructor() {
  }
  
  /**
   * set name
   * 
   * @param {string} name
   * 
   * @memberOf AppServiceService
   */
  setName( name: string ) {
    this.name = name;
    this.onNameChange.emit();
  }
  
  /**
   * Return name
   * 
   * @returns {string}
   * 
   * @memberOf AppServiceService
   */
  getName(): string {
    return this.name;
  }
  
  /**
   * Return EventEmitter which is fire when name change
   * 
   * @returns {EventEmitter}
   * 
   * @memberOf AppServiceService
   */
  getOnNameChange(): EventEmitter<any> {
    return this.onNameChange;
  }
}
