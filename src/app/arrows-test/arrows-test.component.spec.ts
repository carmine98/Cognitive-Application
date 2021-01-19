import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsTestComponent } from './arrows-test.component';

describe('ArrowsTestComponent', () => {
  let component: ArrowsTestComponent;
  let fixture: ComponentFixture<ArrowsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrowsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
