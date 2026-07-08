import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReg } from './user-reg';

describe('UserReg', () => {
  let component: UserReg;
  let fixture: ComponentFixture<UserReg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserReg],
    }).compileComponents();

    fixture = TestBed.createComponent(UserReg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
