import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroftheweekComponent } from './caroftheweek.component';

describe('CaroftheweekComponent', () => {
  let component: CaroftheweekComponent;
  let fixture: ComponentFixture<CaroftheweekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaroftheweekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroftheweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
