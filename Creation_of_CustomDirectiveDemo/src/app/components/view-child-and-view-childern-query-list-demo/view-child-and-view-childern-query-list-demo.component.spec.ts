import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildAndViewChildernQueryListDemoComponent } from './view-child-and-view-childern-query-list-demo.component';

describe('ViewChildAndViewChildernQueryListDemoComponent', () => {
  let component: ViewChildAndViewChildernQueryListDemoComponent;
  let fixture: ComponentFixture<ViewChildAndViewChildernQueryListDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChildAndViewChildernQueryListDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildAndViewChildernQueryListDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
