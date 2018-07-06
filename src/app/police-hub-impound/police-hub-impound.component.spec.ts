import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliceHubImpoundComponent } from './police-hub-impound.component';

describe('PoliceHubImpoundComponent', () => {
  let component: PoliceHubImpoundComponent;
  let fixture: ComponentFixture<PoliceHubImpoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliceHubImpoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliceHubImpoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
