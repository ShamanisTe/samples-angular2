/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I18nngComponent } from './i18nng.component';

describe('I18nngComponent', () => {
  let component: I18nngComponent;
  let fixture: ComponentFixture<I18nngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18nngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18nngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
