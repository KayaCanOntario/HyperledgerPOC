import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnerCarInfoComponent } from './car-owner-car-info.component';

describe('CarOwnerCarInfoComponent', () => {
  let component: CarOwnerCarInfoComponent;
  let fixture: ComponentFixture<CarOwnerCarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOwnerCarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnerCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
