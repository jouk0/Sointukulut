import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerusSointukulutComponent } from './perus-sointukulut.component';

describe('PerusSointukulutComponent', () => {
  let component: PerusSointukulutComponent;
  let fixture: ComponentFixture<PerusSointukulutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerusSointukulutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerusSointukulutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
