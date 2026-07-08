import { TestBed } from '@angular/core/testing';

import { ServicePracticeComponent } from './service-practice-component';

describe('ServicePracticeComponent', () => {
  let service: ServicePracticeComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicePracticeComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
