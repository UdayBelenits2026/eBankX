import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePractice } from './service-practice';

describe('ServicePractice', () => {
  let component: ServicePractice;
  let fixture: ComponentFixture<ServicePractice>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePractice],
    }).compileComponents();

    fixture = TestBed.createComponent(ServicePractice);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
