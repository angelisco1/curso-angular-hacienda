import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp05ServiciosComponent } from './cmp05-servicios.component';

describe('Cmp05ServiciosComponent', () => {
  let component: Cmp05ServiciosComponent;
  let fixture: ComponentFixture<Cmp05ServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp05ServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp05ServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
