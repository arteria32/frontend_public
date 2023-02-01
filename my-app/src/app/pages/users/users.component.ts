import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: UserInterface[];
  constructor(private userService: UserService) {
    userService.getAllUsers();
    this.userService.users.subscribe((result) => {
      this.users = result;
    });
  }
}
