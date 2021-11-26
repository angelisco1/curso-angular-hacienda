import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp03PipesComponent } from './cmp03-pipes.component';

describe('Cmp03PipesComponent', () => {
  let component: Cmp03PipesComponent;
  let fixture: ComponentFixture<Cmp03PipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp03PipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp03PipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
