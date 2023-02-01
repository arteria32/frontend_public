import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ITodo } from 'src/app/models/todo';
import { IUser } from 'src/app/models/user';
import { TodosService } from 'src/app/services/todos.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-todos-page',
  templateUrl: './todos-page.component.html',
  styleUrls: ['./todos-page.component.css'],
})
export class TodosPageComponent implements OnInit {
  todos: ITodo[] = [];
  user: IUser;

  constructor(
    private todosService: TodosService,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.todosService
        .getTodosByUserId(params['id'])
        .subscribe((todos: ITodo[]) => {
          this.todos = todos.filter((todo) => todo.userId === +params['id']);
        });
      this.usersService.getUserById(params['id']).subscribe((user: IUser) => {
        this.user = user;
      });
    });
  }
}
