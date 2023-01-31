import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userTodoModel } from '../models/userTodo.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable()
export class UsersTodosService {
  private usersUrl: string = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {}

  getUserTodos(todosId: string): Observable<userTodoModel[]> {
    return this.http.get<userTodoModel[]>(this.usersUrl + todosId + '/todos');
  }
}
