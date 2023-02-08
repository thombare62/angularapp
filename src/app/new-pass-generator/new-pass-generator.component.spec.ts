import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPassGeneratorComponent } from './new-pass-generator.component';

describe('NewPassGeneratorComponent', () => {
  let component: NewPassGeneratorComponent;
  let fixture: ComponentFixture<NewPassGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPassGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPassGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
