import { Component, Input } from '@angular/core';
import { IUsers } from 'src/app/models/users';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  details = false;
  @Input()
  user!: IUsers;
}
