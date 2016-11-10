import { Component, OnInit, Inject } from '@angular/core';
import { LocalService } from "../../services/local.service";
import { CommentsService } from "../../services/comments.service";
import { MESSAGE, MsgOpaqueToken } from "../../models/msg-opaque-token";

@Component({
  selector:    'providersdemo-first',
  templateUrl: './providers-demo-first.component.html',
  styleUrls:   ['./providers-demo-first.component.css'],
  providers:   [LocalService]
})
export class ProvidersDemoFirstComponent implements OnInit {
  
  apiKey: string;
  comments: Array<string>;
  logs = [];
  
  constructor(
               private localService: LocalService,
               private commentsService: CommentsService,
               @Inject('TITLE') private title: string,
               @Inject(MESSAGE) private msgOpaqueToken: MsgOpaqueToken ) {
    
    
    this.logs.push("value from localService=" + localService.getValue());
    this.logs.push("value from TITLE=" + title);
    this.logs.push("value from OpaqueToken MESSAGE=" + msgOpaqueToken.msg);

    this.logs.push("You can use CommentsNewService by uncomment it from providers-demo.module.ts");
  }
  
  ngOnInit() {
    this.apiKey = this.commentsService.getAPIKEY();
    this.comments = this.commentsService.getComments();
  }
  
  
  
}
