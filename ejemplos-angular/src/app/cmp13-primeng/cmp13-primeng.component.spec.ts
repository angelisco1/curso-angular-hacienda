import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp13PrimengComponent } from './cmp13-primeng.component';

describe('Cmp13PrimengComponent', () => {
  let component: Cmp13PrimengComponent;
  let fixture: ComponentFixture<Cmp13PrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp13PrimengComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp13PrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
