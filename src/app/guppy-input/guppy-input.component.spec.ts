/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GuppyInputComponent } from './guppy-input.component';

describe('GuppyInputComponent', () => {
  let component: GuppyInputComponent;
  let fixture: ComponentFixture<GuppyInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuppyInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuppyInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
