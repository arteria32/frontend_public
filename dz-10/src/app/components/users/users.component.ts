import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service"

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  public users$ = this.userService.usersData$;

  constructor(public userService: UsersService) { }
}
