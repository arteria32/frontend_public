// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { catchError, Observable, throwError } from 'rxjs';

// Models
import { User } from '../models/user';

// Common
import { API_URL } from '../common/api';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`).pipe(
      catchError((err) => {
        console.error(err);

        return throwError(() => new Error(err.message));
      })
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/users/${id}`).pipe(
      catchError((err) => {
        console.error(err);

        return throwError(() => new Error(err.message));
      })
    );
  }
}
