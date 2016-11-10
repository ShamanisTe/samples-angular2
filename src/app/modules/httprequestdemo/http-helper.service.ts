import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { PostWS } from "./post";

// Avoid to add rxjs/Rx directly because is too big
// import { Observable } from "rxjs/Rx";
//
// import 'rxjs/observable/';
// // // // Statics
// import 'rxjs/add/observable/throw';
// // // // // Operators
// import 'rxjs/add/operator/catch';
// // // import 'rxjs/add/operator/debounceTime';
// // // import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/map';
// // // import 'rxjs/add/operator/switchMap';
// import 'rxjs/add/operator/toPromise';
// import 'rxjs/add/operator/delay';

import { Observable } from "rxjs/observable";

@Injectable()
export class HttpHelperService {
  
  baseUrl: string;
  
  constructor( private http: Http ) {
    this.baseUrl = "https://jsonplaceholder.typicode.com/";
  }
  
  /**
   *
   *
   * @returns {Observable<R>}
   */
  getPostsObservable(): Observable<PostWS[]> {
    let url = this.baseUrl + "posts";
    return this.http.get(url)
               .delay(new Date(Date.now() + 5000))
               .map(response => response.json())
               .catch(this.handleError);
  }
  
  /**
   *
   * @returns {Observable<R>}
   */
  getPostsPromise(): Promise<PostWS[]> {
    let url = this.baseUrl + "posts";
    return this.http.get(url)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }
  
  /**
   *
   *
   * @param userId
   * @returns {Observable<R>}
   */
  getPostsFromUserObservable( userId: number ): Observable<PostWS> {
    let url = this.baseUrl + "posts";
    
    let querystring = new URLSearchParams();
    querystring.set('userId', userId.toString());
    let options = new RequestOptions({search: querystring});
    
    return this.http.get(url, options)
               .map(response => response.json())
               .catch(this.handleError);
  }
  
  /**
   *
   *
   * @param post
   * @returns {Observable<R>}
   */
  addPost( post: PostWS ) {
    let url = this.baseUrl + "posts";
    
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    
    return this.http.post(url, post, options)
               .map(response => response.json())
               .catch(this.handleError);
  }
  
  /**
   *
   * @param error
   * @returns {ErrorObservable}
   */
  handleError( error: Response | any ) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
