import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carrieres } from './carrieres';

describe('Carrieres', () => {
  let component: Carrieres;
  let fixture: ComponentFixture<Carrieres>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Carrieres]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carrieres);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
