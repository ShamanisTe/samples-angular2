import { Component } from '@angular/core';
import { AppServiceService } from "./services/app-service.service";

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls:   ['./app.component.css']
})
export class AppComponent {
  _title = 'samples from angular-cli';
  title = '';
  
  constructor( private appservice: AppServiceService ) {
    
    this.title = this._title + " by " + this.appservice.getName();
    this.listenNameChange();  

  }
  
  /**
   * listen change from AppServiceService
   * @memberOf AppComponent
   */
  listenNameChange() {

    this.appservice.getOnNameChange().subscribe(
      ( next ) => {
        console.log(next);
        this.title = this._title + " " + this.appservice.getName();
      },
      ( error ) => {
        console.log("getOnNameChange error=", error);
      },
      () => {
        console.log("getOnNameChange complet");
      });

  }
}
