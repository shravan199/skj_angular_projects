import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sender2Component } from './sender2.component';

describe('Sender2Component', () => {
  let component: Sender2Component;
  let fixture: ComponentFixture<Sender2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sender2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Sender2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
