/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthAdminActivateGuard } from './admin.guard';

describe('Service: AuthRequired', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthAdminActivateGuard]
    });
  });
  
  it('should ...', inject([AuthAdminActivateGuard], ( service: AuthAdminActivateGuard ) => {
    expect(service).toBeTruthy();
  }));
});
