import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsTestRealComponent } from './arrows-test-real.component';

describe('ArrowsTestRealComponent', () => {
  let component: ArrowsTestRealComponent;
  let fixture: ComponentFixture<ArrowsTestRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowsTestRealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsTestRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
