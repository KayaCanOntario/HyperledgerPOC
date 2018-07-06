import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceHubReportComponent } from './police-hub-report.component';

describe('PoliceHubReportComponent', () => {
  let component: PoliceHubReportComponent;
  let fixture: ComponentFixture<PoliceHubReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceHubReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceHubReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
