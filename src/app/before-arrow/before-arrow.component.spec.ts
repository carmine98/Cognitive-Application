import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeArrowComponent } from './before-arrow.component';

describe('BeforeArrowComponent', () => {
  let component: BeforeArrowComponent;
  let fixture: ComponentFixture<BeforeArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeforeArrowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
