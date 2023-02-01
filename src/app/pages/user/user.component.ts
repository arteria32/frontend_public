// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

// Services
import { UserService } from '../../services/user.service';

// Models
import { User } from '../../models/user';

@Component({
  selector: 'user-page',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  id: number;
  
  user: User | null;

  loading: boolean;

  error: String;
  
  constructor(
    private userService: UserService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) {
    this.loading = false;
    
    this.error = '';
    
    this.user = null;

    this.id = this.activateRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.loading = true;

    this.userService.getUser(this.id).subscribe({
      next: (data: User) => {
        this.user = data;

        this.loading = false;
      },
      error: (err: any) => {
        this.loading = false;

        this.error = err.message;
      },
    });
  }

  onClick(): void {
    this.router.navigate(['/users', this.id, 'todos']);
  }
}
