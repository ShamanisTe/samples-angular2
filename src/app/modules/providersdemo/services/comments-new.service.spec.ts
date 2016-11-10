/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommentsNewService } from './comments-new.service';

describe('Service: CommentsNew', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsNewService]
    });
  });
  
  it('should ...', inject([CommentsNewService], ( service: CommentsNewService ) => {
    expect(service).toBeTruthy();
  }));
});
