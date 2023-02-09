import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDropListComponent } from './country-drop-list.component';

describe('CountryDropListComponent', () => {
  let component: CountryDropListComponent;
  let fixture: ComponentFixture<CountryDropListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountryDropListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDropListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
