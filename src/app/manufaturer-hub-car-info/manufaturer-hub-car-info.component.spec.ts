import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufaturerHubCarInfoComponent } from './manufaturer-hub-car-info.component';

describe('ManufaturerHubCarInfoComponent', () => {
  let component: ManufaturerHubCarInfoComponent;
  let fixture: ComponentFixture<ManufaturerHubCarInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufaturerHubCarInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufaturerHubCarInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
