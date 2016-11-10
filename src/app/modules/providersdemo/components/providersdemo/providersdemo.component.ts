import { Component, OnInit } from '@angular/core';

import { AppServiceService } from "../../../../services/app-service.service";


@Component({
  selector: 'providersdemo',
  templateUrl: './providersdemo.component.html',
  styleUrls: ['./providersdemo.component.css']
})
export class ProvidersdemoComponent implements OnInit {
  
  

  constructor( private appservice: AppServiceService) { }

  ngOnInit() {

    this.playWithAppService();

  }

  /**
   * change value from appService (provide in two module)
   */
  playWithAppService() {
    // Change value from AppServiceService provides twice
    setTimeout(() => {
      this.appservice.setName("Name change by ProvidersdemoComponent");
    }, 3000);
    setTimeout(() => {
      this.appservice.setName("Name change by ProvidersdemoComponent (2)");
    }, 10000);
  }

}
