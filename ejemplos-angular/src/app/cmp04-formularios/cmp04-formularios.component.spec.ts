import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp04FormulariosComponent } from './cmp04-formularios.component';

describe('Cmp04FormulariosComponent', () => {
  let component: Cmp04FormulariosComponent;
  let fixture: ComponentFixture<Cmp04FormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp04FormulariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp04FormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
