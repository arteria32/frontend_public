import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: IUser;

  details = false;
}
