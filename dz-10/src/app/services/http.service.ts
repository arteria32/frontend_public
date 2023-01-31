import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../components/users/user/user-interface";
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
export class HttpService{
    private readonly users$ = new BehaviorSubject<User[]>([]);

    constructor(private http: HttpClient){ }

    public get usersData$(): Observable<User[]> {
        return this.users$.asObservable();
      }
      
    getData() {
        this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
            this.users$.next(data);
          });
    }
}