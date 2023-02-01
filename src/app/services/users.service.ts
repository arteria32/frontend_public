import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from './../models/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url: string = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.url);
  }
}
