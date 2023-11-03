import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UudetRiffitComponent } from './uudet-riffit.component';

describe('UudetRiffitComponent', () => {
  let component: UudetRiffitComponent;
  let fixture: ComponentFixture<UudetRiffitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UudetRiffitComponent]
    });
    fixture = TestBed.createComponent(UudetRiffitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
