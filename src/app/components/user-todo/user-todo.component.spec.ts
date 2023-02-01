import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTodoComponent } from './user-todo.component';

describe('UserTodoComponent', () => {
  let component: UserTodoComponent;
  let fixture: ComponentFixture<UserTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserTodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
