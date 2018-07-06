import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnerCarEditComponent } from './car-owner-car-edit.component';

describe('CarOwnerCarEditComponent', () => {
  let component: CarOwnerCarEditComponent;
  let fixture: ComponentFixture<CarOwnerCarEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOwnerCarEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnerCarEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
