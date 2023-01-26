import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservoirComponent } from './reservoir.component';

describe('ReservoirComponent', () => {
  let component: ReservoirComponent;
  let fixture: ComponentFixture<ReservoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservoirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
