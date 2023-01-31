import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: UserModel[];
  infoToggle = false;
  loaded: boolean;

  constructor(private usersService: UsersService) {}

  getUsers(): void {
    this.usersService.getUsers().subscribe((users) => {
      {
        this.users = users;
        if (users !== undefined) {
          this.loaded = true;
        }
      }
    });
  }

  ngOnInit() {
    this.getUsers();
  }
}
