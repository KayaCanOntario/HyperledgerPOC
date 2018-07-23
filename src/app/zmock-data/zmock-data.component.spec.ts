import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZmockDataComponent } from './zmock-data.component';

describe('ZmockDataComponent', () => {
  let component: ZmockDataComponent;
  let fixture: ComponentFixture<ZmockDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZmockDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZmockDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
