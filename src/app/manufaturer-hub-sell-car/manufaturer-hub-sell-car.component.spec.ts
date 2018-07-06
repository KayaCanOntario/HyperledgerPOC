import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufaturerHubSellCarComponent } from './manufaturer-hub-sell-car.component';

describe('ManufaturerHubSellCarComponent', () => {
  let component: ManufaturerHubSellCarComponent;
  let fixture: ComponentFixture<ManufaturerHubSellCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufaturerHubSellCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufaturerHubSellCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
