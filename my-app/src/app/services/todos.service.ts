import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Subject } from 'rxjs';
import { URL } from '../common/url';
import { TodosInterface } from '../interfaces/todos.interface';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private request: HttpClient) {}

  getTodosByUsersId(id: number) {
    const result = lastValueFrom(
      this.request.get<TodosInterface[]>(`${URL}/${id}/todos`)
    );
    return result;
  }
}
