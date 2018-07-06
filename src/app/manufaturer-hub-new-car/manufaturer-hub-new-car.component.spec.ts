import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufaturerHubNewCarComponent } from './manufaturer-hub-new-car.component';

describe('ManufaturerHubNewCarComponent', () => {
  let component: ManufaturerHubNewCarComponent;
  let fixture: ComponentFixture<ManufaturerHubNewCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufaturerHubNewCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufaturerHubNewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
