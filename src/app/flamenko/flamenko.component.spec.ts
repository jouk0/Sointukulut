import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlamenkoComponent } from './flamenko.component';

describe('FlamenkoComponent', () => {
  let component: FlamenkoComponent;
  let fixture: ComponentFixture<FlamenkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlamenkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlamenkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
