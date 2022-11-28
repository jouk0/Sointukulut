import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErikoisotteetComponent } from './erikoisotteet.component';

describe('ErikoisotteetComponent', () => {
  let component: ErikoisotteetComponent;
  let fixture: ComponentFixture<ErikoisotteetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErikoisotteetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErikoisotteetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
