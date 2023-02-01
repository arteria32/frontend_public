import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../components/users/user/user-interface";
import {  Observable, shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class UsersService{
  public readonly users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').pipe(
    shareReplay(1)
  )

  constructor(private http: HttpClient){ }

  public get usersData$(): Observable<User[]> {
    return this.users$;
  }

}