import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css'],
})
export class UserTodoComponent implements OnInit {
  id: number;
  todos: Todo[];
  constructor(
    private activateRoute: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.todoService.getTodoById(this.id).subscribe((streamTodos) => {
      this.todos = streamTodos;
    });
  }
  goToUser(): void {
    this.router.navigate(['']);
  }
}
