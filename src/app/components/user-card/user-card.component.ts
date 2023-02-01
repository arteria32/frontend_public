import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user: User;

  visability: boolean = false;

  constructor(private router: Router) {}

  show() {
    this.visability = !this.visability;
  }

  goToTodo(id: number): void {
    this.router.navigate(['todo', id]);
  }
}
