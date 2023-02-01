import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../components/users/user/user-interface";
import { Observable, shareReplay} from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class UsersService{
  private readonly users$ = this.http.get<User[]>(environment.usersAPI).pipe(
    shareReplay(1)
  )
   
  constructor(private http: HttpClient){  }

  public get usersData$(): Observable<User[]> {
    return this.users$;
  }
  
  public userById$(id: number): Observable<User | undefined>{
    return this.users$.pipe(
      map(users => users.find(user => user.id === id))
    );
  }

}