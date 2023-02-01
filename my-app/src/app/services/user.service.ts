import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Subject } from 'rxjs';
import { URL } from '../common/url';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: Subject<UserInterface[]> = new Subject<UserInterface[]>();
  constructor(private request: HttpClient) {}

  async getAllUsers() {
    const result = await lastValueFrom(this.request.get<UserInterface[]>(URL));
    this.users.next(result);
  }
}
