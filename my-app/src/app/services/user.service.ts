import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Subject } from 'rxjs';
import { URL } from '../common/url';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private request: HttpClient) {}

  getAllUsers() {
    const result = lastValueFrom(this.request.get<UserInterface[]>(URL));
    return result;
  }
}
