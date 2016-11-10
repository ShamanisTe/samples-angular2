import { Injectable } from '@angular/core';
import { Comments } from "../models/comments";

var faker = require('faker');

@Injectable()
export class CommentsNewService implements Comments {
  
  _comments: Array<string> = [];
  _apikey: string = "APIKEYAZEQSWXC";
  
  getComments(): Array<string> {
    return this._comments;
  }
  
  getAPIKEY(): string {
    return this._apikey;
  }
  
  constructor() {
    for (let i = 0; i < 5; i++) {
      this._comments.push("[" + faker.date.recent() + "] " + faker.name.findName() + " : " + faker.lorem.sentences());
    }
  }
  
}
