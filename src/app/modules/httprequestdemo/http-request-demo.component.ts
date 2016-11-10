import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from "./http-helper.service";
import { PostWS } from "./post";
import { Observable } from "rxjs";

@Component({
  selector:    'http-request-demo',
  templateUrl: './http-request-demo.component.html',
  styleUrls:   ['./http-request-demo.component.css']
})
export class HttpRequestDemoComponent implements OnInit {
  
  posts: PostWS[];
  errorMessage: any;
  postsUser: Observable<PostWS>;
  
  constructor( private httpHelper: HttpHelperService ) {
  }
  
  ngOnInit() {
    this.getPostsObservable();
    this.addPostObervable();
    
    this.getPostsFromUserObservable();
  }
  
  /**
   *
   */
  getPostsObservable() {
    
    this.httpHelper.getPostsObservable()
        .subscribe(
          posts => this.posts = posts,
          error => this.errorMessage = <any>error);
  }
  
  /**
   *
   */
  addPostObervable() {
    let post: PostWS = {
      userId: 1,
      title:  'post from ng2',
      body:   'content from ng2'
    };
    
    this.httpHelper.addPost(post)
        .subscribe(
          res => console.log("addPost=", res),
          error => this.errorMessage = <any>error);
  }
  
  /**
   * populate local variable directly with observable in order to let the view displaying
   */
  getPostsFromUserObservable() {
    let userId = 1;
    this.postsUser = this.httpHelper.getPostsFromUserObservable(userId);
  }
}
