import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { TodosInterface } from 'src/app/interfaces/todos.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: TodosInterface[];
  constructor(
    private todoService: TodosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.todoService.getTodosByUsersId(+params['id']);
      this.todoService.todos.subscribe((result) => {
        this.todos = result;
      });
    });
  }
}
