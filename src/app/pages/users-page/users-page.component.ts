import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css'],
})
export class UsersPageComponent implements OnInit {
  users: IUser[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getAll().subscribe((users: IUser[]) => {
      this.users = users;
    });
  }
}
