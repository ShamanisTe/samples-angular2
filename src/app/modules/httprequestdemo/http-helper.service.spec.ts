/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpHelperService } from './http-helper.service';

describe('Service: HttpHelper', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpHelperService]
    });
  });
  
  it('should ...', inject([HttpHelperService], ( service: HttpHelperService ) => {
    expect(service).toBeTruthy();
  }));
});
