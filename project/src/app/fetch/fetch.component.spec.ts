/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FetchComponent } from './fetch.component';

describe('FetchComponent', () => {
  let component: FetchComponent;
  let fixture: ComponentFixture<FetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
