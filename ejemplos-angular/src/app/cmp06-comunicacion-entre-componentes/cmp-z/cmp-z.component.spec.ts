import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpZComponent } from './cmp-z.component';

describe('CmpZComponent', () => {
  let component: CmpZComponent;
  let fixture: ComponentFixture<CmpZComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpZComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
