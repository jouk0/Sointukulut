import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AhdchComponent } from './ahdch.component';

describe('AhdchComponent', () => {
  let component: AhdchComponent;
  let fixture: ComponentFixture<AhdchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AhdchComponent]
    });
    fixture = TestBed.createComponent(AhdchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
