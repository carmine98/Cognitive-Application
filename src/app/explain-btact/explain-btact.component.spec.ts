import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplainBTACTComponent } from './explain-btact.component';

describe('ExplainBTACTComponent', () => {
  let component: ExplainBTACTComponent;
  let fixture: ComponentFixture<ExplainBTACTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplainBTACTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplainBTACTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
