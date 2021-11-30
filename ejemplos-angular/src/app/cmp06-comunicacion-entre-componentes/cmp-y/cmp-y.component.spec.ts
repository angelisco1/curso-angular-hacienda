import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpYComponent } from './cmp-y.component';

describe('CmpYComponent', () => {
  let component: CmpYComponent;
  let fixture: ComponentFixture<CmpYComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpYComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
