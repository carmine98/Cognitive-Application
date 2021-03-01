import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertNewTestIDComponent } from './insert-new-test-id.component';

describe('InsertNewTestIDComponent', () => {
  let component: InsertNewTestIDComponent;
  let fixture: ComponentFixture<InsertNewTestIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertNewTestIDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertNewTestIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
