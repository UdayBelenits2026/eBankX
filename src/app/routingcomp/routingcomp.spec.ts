import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routingcomp } from './routingcomp';

describe('Routingcomp', () => {
  let component: Routingcomp;
  let fixture: ComponentFixture<Routingcomp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routingcomp],
    }).compileComponents();

    fixture = TestBed.createComponent(Routingcomp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
