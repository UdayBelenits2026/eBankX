import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Defaultpagecomp } from './defaultpagecomp';

describe('Defaultpagecomp', () => {
  let component: Defaultpagecomp;
  let fixture: ComponentFixture<Defaultpagecomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Defaultpagecomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Defaultpagecomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
