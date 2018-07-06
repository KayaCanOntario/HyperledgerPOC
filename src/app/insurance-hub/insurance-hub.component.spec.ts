import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceHubComponent } from './insurance-hub.component';

describe('InsuranceHubComponent', () => {
  let component: InsuranceHubComponent;
  let fixture: ComponentFixture<InsuranceHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
