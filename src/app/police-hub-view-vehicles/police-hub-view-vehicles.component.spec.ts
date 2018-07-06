import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceHubViewVehiclesComponent } from './police-hub-view-vehicles.component';

describe('PoliceHubViewVehiclesComponent', () => {
  let component: PoliceHubViewVehiclesComponent;
  let fixture: ComponentFixture<PoliceHubViewVehiclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceHubViewVehiclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceHubViewVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
