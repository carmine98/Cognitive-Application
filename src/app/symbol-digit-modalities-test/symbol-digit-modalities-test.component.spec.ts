import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymbolDigitModalitiesTestComponent } from './symbol-digit-modalities-test.component';

describe('SymbolDigitModalitiesTestComponent', () => {
  let component: SymbolDigitModalitiesTestComponent;
  let fixture: ComponentFixture<SymbolDigitModalitiesTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymbolDigitModalitiesTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymbolDigitModalitiesTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
