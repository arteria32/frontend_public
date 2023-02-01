import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodos } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos!: ITodos[];

  constructor(private http: HttpClient) {}

  getAll(r: string): Observable<ITodos[]> {
    return this.http.get<ITodos[]>(
      'http://jsonplaceholder.typicode.com/users/' + r + '/todos'
    );
  }

  getById(id: number) {
    return this.todos.find((p) => p.id === id);
  }
}
