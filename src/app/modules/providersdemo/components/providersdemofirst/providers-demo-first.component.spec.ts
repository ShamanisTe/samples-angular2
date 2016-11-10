/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ProvidersDemoFirstComponent } from './providers-demo-first.component';

describe('ImportserviceComponent', () => {
  let component: ProvidersDemoFirstComponent;
  let fixture: ComponentFixture<ProvidersDemoFirstComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
             declarations: [ProvidersDemoFirstComponent]
           })
           .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidersDemoFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
