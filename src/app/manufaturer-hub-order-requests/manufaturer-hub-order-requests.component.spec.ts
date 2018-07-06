import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufaturerHubOrderRequestsComponent } from './manufaturer-hub-order-requests.component';

describe('ManufaturerHubOrderRequestsComponent', () => {
  let component: ManufaturerHubOrderRequestsComponent;
  let fixture: ComponentFixture<ManufaturerHubOrderRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufaturerHubOrderRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufaturerHubOrderRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
