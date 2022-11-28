import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanoitusOhjeComponent } from './sanoitus-ohje.component';

describe('SanoitusOhjeComponent', () => {
  let component: SanoitusOhjeComponent;
  let fixture: ComponentFixture<SanoitusOhjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanoitusOhjeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanoitusOhjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
