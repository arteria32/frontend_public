import { Component, OnInit } from '@angular/core';
import { IUsers } from 'src/app/models/users';
import { UsersService } from './../../services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  users: IUsers[] = [];

  constructor(private UsersService: UsersService) {}

  ngOnInit() {
    this.UsersService.getAll().subscribe((users: IUsers[]) => {
      this.users = users;
    });
  }
}
