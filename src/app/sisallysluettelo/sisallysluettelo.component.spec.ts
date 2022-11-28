import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisallysluetteloComponent } from './sisallysluettelo.component';

describe('SisallysluetteloComponent', () => {
  let component: SisallysluetteloComponent;
  let fixture: ComponentFixture<SisallysluetteloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisallysluetteloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisallysluetteloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
