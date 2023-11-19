import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgSharpAsharpCDSharpComponent } from './eg-sharp-asharp-cdsharp.component';

describe('EgSharpAsharpCDSharpComponent', () => {
  let component: EgSharpAsharpCDSharpComponent;
  let fixture: ComponentFixture<EgSharpAsharpCDSharpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EgSharpAsharpCDSharpComponent]
    });
    fixture = TestBed.createComponent(EgSharpAsharpCDSharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
