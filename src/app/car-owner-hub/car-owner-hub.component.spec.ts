import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnerHubComponent } from './car-owner-hub.component';

describe('CarOwnerHubComponent', () => {
  let component: CarOwnerHubComponent;
  let fixture: ComponentFixture<CarOwnerHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOwnerHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnerHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
