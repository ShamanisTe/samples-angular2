/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I18nocombeComponent } from './i18nocombe.component';

describe('I18nocombeComponent', () => {
  let component: I18nocombeComponent;
  let fixture: ComponentFixture<I18nocombeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nocombeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nocombeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
