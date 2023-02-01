// Angular
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() id = 0;

  @Input() name = '';

  @Input() email = '';

  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/users', this.id]);
  }
}
