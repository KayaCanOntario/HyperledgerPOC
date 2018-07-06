import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarOwnerCarNewComponent } from './car-owner-car-new.component';

describe('CarOwnerCarNewComponent', () => {
  let component: CarOwnerCarNewComponent;
  let fixture: ComponentFixture<CarOwnerCarNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarOwnerCarNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarOwnerCarNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
