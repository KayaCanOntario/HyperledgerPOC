import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufaturerHubStockComponent } from './manufaturer-hub-stock.component';

describe('ManufaturerHubStockComponent', () => {
  let component: ManufaturerHubStockComponent;
  let fixture: ComponentFixture<ManufaturerHubStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManufaturerHubStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManufaturerHubStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
