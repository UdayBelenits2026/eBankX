import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesConcepts } from './pipes-concepts';

describe('PipesConcepts', () => {
  let component: PipesConcepts;
  let fixture: ComponentFixture<PipesConcepts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesConcepts],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesConcepts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
