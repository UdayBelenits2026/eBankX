import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NforDirectiveFor } from './nfor-directive-for';

describe('NforDirectiveFor', () => {
  let component: NforDirectiveFor;
  let fixture: ComponentFixture<NforDirectiveFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NforDirectiveFor],
    }).compileComponents();

    fixture = TestBed.createComponent(NforDirectiveFor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
