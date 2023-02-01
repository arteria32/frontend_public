
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { map, Observable, switchMap, filter } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserTasks } from './user-task-interface';
import {environment} from "../../../environments/environment"
import { User } from '../users/user/user-interface';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})

export class UserTasksComponent {

  private userId$ = this.route.params.pipe(
    map(params => Number(params['id'])), 
  );  

  public user$ = this.userId$.pipe(
    switchMap(id => this.usersService.userById$(id)),
    filter(user => {console.log(user)
      return !!user} )
  ) as Observable<User>;

  public userTasks$ = this.userId$.pipe(
    switchMap(id => this.http.get<UserTasks[]>(`${environment.userAPI}users/${id}/todos`))
  );
  constructor(private usersService: UsersService, 
              private route: ActivatedRoute,
              private http: HttpClient) { }

}

// switchMap(id => this.usersService.userById$(id))