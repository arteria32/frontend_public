// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from '../../services/user.service';

// Models
import { User } from '../../models/user';

@Component({
  selector: 'users-page',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[];

  loading: boolean;

  error: String;

  constructor(private userService: UserService) {
    this.users = [];

    this.loading = false;

    this.error = '';
  }

  ngOnInit(): void {
    this.loading = true;

    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        this.users = data;

        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;

        this.error = err.message;
      },
    });
  }
}
