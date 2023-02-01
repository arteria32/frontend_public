import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { ITodo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: ITodo[] = [];

  constructor(private http: HttpClient) {}

  getTodosByUserId(id: string): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(
      'https://jsonplaceholder.typicode.com/users/' + id + '/todos'
    );
  }
}
