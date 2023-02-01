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

  public getUserTasks(id:number):void {
    this.http.get<UserTasks[]>(`https://jsonplaceholder.typicode.com/users/${id}/todos`).subscribe(data => {
        this.userTasks$.next(data);
        console.log(this.userTasks$)
    });
  }

  public get userTasksData$(): Observable<UserTasks[]> {
    return this.userTasks$;
  }

}