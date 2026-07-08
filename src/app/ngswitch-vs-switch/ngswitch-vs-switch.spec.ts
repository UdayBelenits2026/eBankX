import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgswitchVsSwitch } from './ngswitch-vs-switch';

describe('NgswitchVsSwitch', () => {
  let component: NgswitchVsSwitch;
  let fixture: ComponentFixture<NgswitchVsSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgswitchVsSwitch],
    }).compileComponents();

    fixture = TestBed.createComponent(NgswitchVsSwitch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
