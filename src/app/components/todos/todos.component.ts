import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ITodos } from 'src/app/models/todos';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: ITodos[] = [];
  constructor(
    private route: ActivatedRoute,
    private todosService: TodosService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // this.todos = this.todosService.getById(+params['id']);
      this.todosService.getAll(params['id']).subscribe((todos: ITodos[]) => {
        this.todos = todos;
      });
    });
  }
}
