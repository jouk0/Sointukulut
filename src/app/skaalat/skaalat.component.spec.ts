import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkaalatComponent } from './skaalat.component';

describe('SkaalatComponent', () => {
  let component: SkaalatComponent;
  let fixture: ComponentFixture<SkaalatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkaalatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkaalatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
