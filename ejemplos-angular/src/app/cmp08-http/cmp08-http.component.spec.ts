import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp08HttpComponent } from './cmp08-http.component';

describe('Cmp08HttpComponent', () => {
  let component: Cmp08HttpComponent;
  let fixture: ComponentFixture<Cmp08HttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp08HttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp08HttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
