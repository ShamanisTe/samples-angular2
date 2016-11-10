import { Injectable } from '@angular/core';
import { Comments } from "../models/comments";

@Injectable()
export class CommentsService implements Comments {
  
  getComments() {
    
    return ["msg1", "msg2", "msg3", "msg4"];
  }
  
  getAPIKEY() {
    return "NOAPI";
  }
  
  constructor() {
  }
  
}
