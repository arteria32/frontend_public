import { Component, Input } from '@angular/core';
import { userTodoModel } from '../../models/userTodo.model';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.scss'],
})
export class UserTodoComponent {
  @Input() todo: userTodoModel;
}
