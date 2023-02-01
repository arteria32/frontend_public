import { Component, Input } from '@angular/core';
import { TodosInterface } from 'src/app/interfaces/todos.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: TodosInterface;
}
