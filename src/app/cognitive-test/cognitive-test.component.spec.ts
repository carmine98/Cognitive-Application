import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitiveTestComponent } from './cognitive-test.component';

describe('CognitiveTestComponent', () => {
  let component: CognitiveTestComponent;
  let fixture: ComponentFixture<CognitiveTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CognitiveTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CognitiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
