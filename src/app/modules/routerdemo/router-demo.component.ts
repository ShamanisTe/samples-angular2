import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";

@Component({
  selector:    'app-router-demo',
  templateUrl: './router-demo.component.html',
  styleUrls:   ['./router-demo.component.css']
})
export class RouterDemoComponent implements OnInit {
  
  isAdmin: boolean = false;
  
  constructor( private userService: UserService ) {
  }
  
  ngOnInit() {
    this.isAdmin = this.userService.getAdmin();
  }
  
  /**
   * Event click 
   * 
   * @memberOf RouterDemoComponent
   */
  onIsAdminClick() {
    this.userService.setAdmin(!this.userService.getAdmin());
    this.isAdmin = this.userService.getAdmin();
  }
}
