import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../services/http.service"
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {

  }

  getDataFromServer() {
    this.httpService.getData();
  }


}
