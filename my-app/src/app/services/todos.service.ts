import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Subject } from 'rxjs';
import { URL } from '../common/url';
import { TodosInterface } from '../interfaces/todos.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: Subject<TodosInterface[]> = new Subject<TodosInterface[]>();
  constructor(private request: HttpClient) {}

  async getTodosByUsersId(id: number) {
    const result = await lastValueFrom(
      this.request.get<TodosInterface[]>(`${URL}/${id}/todos`)
    );
    this.todos.next(result);
  }
}
