import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohdantoComponent } from './johdanto.component';

describe('JohdantoComponent', () => {
  let component: JohdantoComponent;
  let fixture: ComponentFixture<JohdantoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JohdantoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JohdantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
