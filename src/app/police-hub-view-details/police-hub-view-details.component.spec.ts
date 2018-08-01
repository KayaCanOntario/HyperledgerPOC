import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceHubViewDetailsComponent } from './police-hub-view-details.component';

describe('PoliceHubViewDetailsComponent', () => {
  let component: PoliceHubViewDetailsComponent;
  let fixture: ComponentFixture<PoliceHubViewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceHubViewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceHubViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
