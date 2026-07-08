import { TestBed } from '@angular/core/testing';

import { CrudServices } from './crud-services';

describe('CrudServices', () => {
  let service: CrudServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
