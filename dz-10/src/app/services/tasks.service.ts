import { UserTasks } from './../components/user-tasks/user-task-interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class TasksService{
  private userTasks$ = new BehaviorSubject<UserTasks[]>([]);

  constructor(private http: HttpClient){ }


private setUsersTasks(data: Observable<UserTasks[]>) {
    
}

}