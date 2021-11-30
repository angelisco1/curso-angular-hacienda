import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp06ComunicacionEntreComponentesComponent } from './cmp06-comunicacion-entre-componentes.component';

describe('Cmp06ComunicacionEntreComponentesComponent', () => {
  let component: Cmp06ComunicacionEntreComponentesComponent;
  let fixture: ComponentFixture<Cmp06ComunicacionEntreComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp06ComunicacionEntreComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp06ComunicacionEntreComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
