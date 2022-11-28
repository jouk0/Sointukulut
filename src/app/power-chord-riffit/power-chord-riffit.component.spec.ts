import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerChordRiffitComponent } from './power-chord-riffit.component';

describe('PowerChordRiffitComponent', () => {
  let component: PowerChordRiffitComponent;
  let fixture: ComponentFixture<PowerChordRiffitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerChordRiffitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PowerChordRiffitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
