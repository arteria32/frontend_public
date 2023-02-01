import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input() user: UserInterface;
  details = false;
}
