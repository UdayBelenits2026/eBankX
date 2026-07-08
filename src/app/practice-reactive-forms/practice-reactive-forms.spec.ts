import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeReactiveForms } from './practice-reactive-forms';

describe('PracticeReactiveForms', () => {
  let component: PracticeReactiveForms;
  let fixture: ComponentFixture<PracticeReactiveForms>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeReactiveForms],
    }).compileComponents();

    fixture = TestBed.createComponent(PracticeReactiveForms);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
