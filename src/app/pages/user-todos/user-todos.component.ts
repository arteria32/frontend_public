import { Component, OnInit } from '@angular/core';
import { userTodoModel } from '../../models/userTodo.model';
import { ActivatedRoute } from '@angular/router';
import { UsersTodosService } from '../../services/user-todos.service';

@Component({
  selector: 'app-user-todos',
  templateUrl: './user-todos.component.html',
  styleUrls: ['./user-todos.component.scss'],
})
export class UserTodosComponent implements OnInit {
  userName: string | null | undefined;
  todos: userTodoModel[];
  todosId: string | null | undefined;
  constructor(
    private activatedRoute: ActivatedRoute,
    private userTodosService: UsersTodosService
  ) {}

  getUserTodos(): void {
    if (this.todosId)
      this.userTodosService.getUserTodos(this.todosId).subscribe((todos) => {
        this.todos = todos;
        if (this.todos?.length === 0) {
          alert('No such User');
        }
      });
  }
  ngOnInit() {
    this.todosId = this.activatedRoute.snapshot.paramMap.get('id');
    this.userName = this.activatedRoute.snapshot.paramMap.get('name');
    this.getUserTodos();
  }
}
