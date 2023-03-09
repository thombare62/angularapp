import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routingassign1Component } from './routingassign1.component';

describe('Routingassign1Component', () => {
  let component: Routingassign1Component;
  let fixture: ComponentFixture<Routingassign1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routingassign1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routingassign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
