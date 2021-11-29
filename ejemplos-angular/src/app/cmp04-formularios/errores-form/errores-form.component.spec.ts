import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroresFormComponent } from './errores-form.component';

describe('ErroresFormComponent', () => {
  let component: ErroresFormComponent;
  let fixture: ComponentFixture<ErroresFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroresFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroresFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
