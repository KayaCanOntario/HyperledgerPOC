import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnerOrderComponent } from './car-owner-order.component';

describe('CarOwnerOrderComponent', () => {
  let component: CarOwnerOrderComponent;
  let fixture: ComponentFixture<CarOwnerOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOwnerOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnerOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
