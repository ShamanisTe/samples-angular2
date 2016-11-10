import { Component, OnInit } from '@angular/core';
import { LocalService } from "../../services/local.service";

import { ConfigApp } from "../../models/config";
import { MinimalCommentsService } from "../../models/minimal-comments";

@Component({
  selector: 'providersdemo-second',
  templateUrl: './providersdemosecond.component.html',
  styleUrls: ['./providersdemosecond.component.css']
})
export class ProvidersdemosecondComponent implements OnInit {

  logs = [];

  constructor(
          private config: ConfigApp,
          private minimalCommentService: MinimalCommentsService,
              // import LocalService should be in error because, it is provide in "importservicecomponent"
              //             private localService: LocalService
  ) { }

  ngOnInit() {

    
    this.logs.push("ProvidersdemosecondComponent");
    this.logs.push("config=" + JSON.stringify(this.config));
    this.logs.push("test minimalCommentService to limit CommentService");

    if (this.minimalCommentService.getComments) {
      this.logs.push("minimalCommentService.getComments() OK");
    } else {
      this.logs.push("minimalCommentService.getComments() KO");
    }
    
    if (this.minimalCommentService.getAPIKEY) {
      this.logs.push("minimalCommentService.getAPIKEY() OK");
    } else {
      this.logs.push("minimalCommentService.getAPIKEY() KO");
    }
    
    this.logs.push("test import LocalService, should be crash if uncomment");
  }

}
