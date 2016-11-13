/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Templatedriven2Component } from './templatedriven2.component';

describe('Templatedriven2Component', () => {
  let component: Templatedriven2Component;
  let fixture: ComponentFixture<Templatedriven2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Templatedriven2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Templatedriven2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
