// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// RxJS
import { catchError, Observable, throwError } from 'rxjs';

// Common
import { API_URL } from '../common/api';

// Models
import { Todo } from '../models/todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos(id: number): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${API_URL}/users/${id}/todos`).pipe(
      catchError((err) => {
        console.error(err);

        return throwError(() => new Error(err.message));
      })
    );
  }
}
