import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceHubComponent } from './police-hub.component';

describe('PoliceHubComponent', () => {
  let component: PoliceHubComponent;
  let fixture: ComponentFixture<PoliceHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
