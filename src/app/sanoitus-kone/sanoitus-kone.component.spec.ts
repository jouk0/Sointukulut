import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanoitusKoneComponent } from './sanoitus-kone.component';

describe('SanoitusKoneComponent', () => {
  let component: SanoitusKoneComponent;
  let fixture: ComponentFixture<SanoitusKoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanoitusKoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanoitusKoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
