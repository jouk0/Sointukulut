import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OmatriffitComponent } from './omatriffit.component';

describe('OmatriffitComponent', () => {
  let component: OmatriffitComponent;
  let fixture: ComponentFixture<OmatriffitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OmatriffitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OmatriffitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
