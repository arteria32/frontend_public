import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, SubscriptionLike } from 'rxjs';
import { TodosInterface } from 'src/app/interfaces/todos.interface';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  todos: TodosInterface[];
  todoSubscribe: Subscription;
  constructor(
    private todoService: TodosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.todoSubscribe = this.route.params.subscribe(async (params: Params) => {
      const result = await this.todoService.getTodosByUsersId(+params['id']);
      this.todos = result;
    });
  }

  ngOnDestroy(): void {
    this.todoSubscribe.unsubscribe();
  }
}
