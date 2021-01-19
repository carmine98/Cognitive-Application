import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainArrowsTestComponent } from './explain-arrows-test.component';

describe('ExplainArrowsTestComponent', () => {
  let component: ExplainArrowsTestComponent;
  let fixture: ComponentFixture<ExplainArrowsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainArrowsTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainArrowsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
