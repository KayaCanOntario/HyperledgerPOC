import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufaturerHubComponent } from './manufaturer-hub.component';

describe('ManufaturerHubComponent', () => {
  let component: ManufaturerHubComponent;
  let fixture: ComponentFixture<ManufaturerHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufaturerHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufaturerHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
