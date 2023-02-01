// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { TodoService } from '../../services/todo.service';

// Models
import { Todo } from '../../models/todo';

@Component({
  selector: 'todos-page',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  loading: boolean;

  error: String;

  constructor(
    private todoService: TodoService,
    private activateRoute: ActivatedRoute
  ) {
    this.todos = [];

    this.loading = false;

    this.error = '';
  }

  ngOnInit(): void {
    this.loading = true;

    this.todoService
      .getTodos(this.activateRoute.snapshot.params['id'])
      .subscribe({
        next: (data: Todo[]) => {
          this.todos = data;

          this.loading = false;
        },
        error: (err: any) => {
          this.loading = false;

          this.error = err.message;
        },
      });
  }
}
