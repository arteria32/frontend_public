import { Component } from '@angular/core';
import { TodosInterface } from 'src/app/interfaces/todos.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todo: TodosInterface = {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  };
}
