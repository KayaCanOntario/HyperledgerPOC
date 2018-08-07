import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufacturerHubEditCarComponent } from './manufacturer-hub-edit-car.component';

describe('ManufacturerHubEditCarComponent', () => {
  let component: ManufacturerHubEditCarComponent;
  let fixture: ComponentFixture<ManufacturerHubEditCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufacturerHubEditCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufacturerHubEditCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
