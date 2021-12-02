import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp12InternacionalizacionComponent } from './cmp12-internacionalizacion.component';

describe('Cmp12InternacionalizacionComponent', () => {
  let component: Cmp12InternacionalizacionComponent;
  let fixture: ComponentFixture<Cmp12InternacionalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp12InternacionalizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp12InternacionalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
