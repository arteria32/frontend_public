import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  userTodos: Todo[];
  constructor(private http: HttpClient) {}
  getTodoById(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(
      'https://jsonplaceholder.typicode.com/users/' + id + '/todos'
    );
  }
}
