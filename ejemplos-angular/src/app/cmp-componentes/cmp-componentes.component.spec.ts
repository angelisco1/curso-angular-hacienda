import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpComponentesComponent } from './cmp-componentes.component';

describe('CmpComponentesComponent', () => {
  let component: CmpComponentesComponent;
  let fixture: ComponentFixture<CmpComponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpComponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpComponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
