import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp07ObservablesComponent } from './cmp07-observables.component';

describe('Cmp07ObservablesComponent', () => {
  let component: Cmp07ObservablesComponent;
  let fixture: ComponentFixture<Cmp07ObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp07ObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp07ObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
