import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from "../components/users/user/user-interface"


@Injectable({
    providedIn: 'root'
  })
export class HttpService{
    public users:User[] = [];

    constructor(private http: HttpClient){ }
      
    getData(){
        this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
            this.users = data;
            console.log(this.users)
          });
    }
}