import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routingassign2Component } from './routingassign2.component';

describe('Routingassign2Component', () => {
  let component: Routingassign2Component;
  let fixture: ComponentFixture<Routingassign2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routingassign2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routingassign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
