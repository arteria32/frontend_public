import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(
      'https://jsonplaceholder.typicode.com/users/' + id
    );
  }
}
