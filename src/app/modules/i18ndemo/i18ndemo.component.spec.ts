/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { I18ndemoComponent } from './i18ndemo.component';

describe('I18ndemoComponent', () => {
  let component: I18ndemoComponent;
  let fixture: ComponentFixture<I18ndemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I18ndemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(I18ndemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
