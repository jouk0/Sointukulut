import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EahcsharpComponent } from './eahcsharp.component';

describe('EahcsharpComponent', () => {
  let component: EahcsharpComponent;
  let fixture: ComponentFixture<EahcsharpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EahcsharpComponent]
    });
    fixture = TestBed.createComponent(EahcsharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
