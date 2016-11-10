/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpRequestDemoComponent } from './http-request-demo.component';

describe('HttpreqComponent', () => {
  let component: HttpRequestDemoComponent;
  let fixture: ComponentFixture<HttpRequestDemoComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [HttpRequestDemoComponent]
           })
           .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(HttpRequestDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
