import { TestBed } from '@angular/core/testing';

import { Serviceprofile } from './serviceprofile';

describe('Serviceprofile', () => {
  let service: Serviceprofile;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceprofile);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
