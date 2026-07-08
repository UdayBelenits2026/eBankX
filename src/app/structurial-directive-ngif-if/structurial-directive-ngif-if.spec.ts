import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructurialDirectiveNgifIf } from './structurial-directive-ngif-if';

describe('StructurialDirectiveNgifIf', () => {
  let component: StructurialDirectiveNgifIf;
  let fixture: ComponentFixture<StructurialDirectiveNgifIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructurialDirectiveNgifIf],
    }).compileComponents();

    fixture = TestBed.createComponent(StructurialDirectiveNgifIf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
