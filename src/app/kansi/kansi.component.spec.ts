import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KansiComponent } from './kansi.component';

describe('KansiComponent', () => {
  let component: KansiComponent;
  let fixture: ComponentFixture<KansiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KansiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KansiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
