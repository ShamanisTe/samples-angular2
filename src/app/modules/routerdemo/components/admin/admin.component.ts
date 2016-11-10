import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { ChangeCmp } from "../../models/change-cmp";
import { UserService } from "../../services/user.service";

@Component({
  selector:    'app-admin',
  templateUrl: './admin.component.html',
  styleUrls:   ['./admin.component.css']
})
export class AdminComponent implements OnInit, ChangeCmp {
  
  constructor( private userService: UserService, private route: Router ) {
    this.listenAdminState();
  }
  
  ngOnInit() {
    
  }
  
  /**
   * 
   * listen change from UserService on admin state
   * 
   * @memberOf AdminComponent
   */
  listenAdminState() {
    this.userService.getOnAdminStateChange().subscribe(
      ( next ) => {
        console.log("getOnAdminStateChange", next);
        if (!next) {
          this.route.navigate(['/router']);
        }
        
      },
      ( error ) => {
        console.log("getOnAdminStateChange error=", error);
      },
      () => {
        console.log("getOnAdminStateChange complet");
      });
  }
  
  /**
   * Return true if change happen in this component
   * 
   * @returns
   * 
   * @memberOf AdminComponent
   */
  hasChanges(){
     return true;
  } 
}
