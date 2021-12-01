import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmp09RoutingComponent } from './cmp09-routing.component';

describe('Cmp09RoutingComponent', () => {
  let component: Cmp09RoutingComponent;
  let fixture: ComponentFixture<Cmp09RoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cmp09RoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp09RoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
