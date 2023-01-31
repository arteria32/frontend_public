import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTasksComponent } from './user-tasks.component';

describe('UserTasksComponent', () => {
  let component: UserTasksComponent;
  let fixture: ComponentFixture<UserTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
