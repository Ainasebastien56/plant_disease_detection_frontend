import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diagnose } from './diagnose';

describe('Diagnose', () => {
  let component: Diagnose;
  let fixture: ComponentFixture<Diagnose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diagnose],
    }).compileComponents();

    fixture = TestBed.createComponent(Diagnose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
