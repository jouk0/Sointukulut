import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JukanComponent } from './jukan.component';

describe('JukanComponent', () => {
  let component: JukanComponent;
  let fixture: ComponentFixture<JukanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JukanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JukanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
