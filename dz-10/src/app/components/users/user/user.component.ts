import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() username: string = '';
  @Input() email: string = '';
  @Input() website: string = '';
  @Input() company: string = '';
  @Input() city: string = '';
  @Input() phone: string = '';
  @Input() i: number = 0;
  
  public isActive:boolean = false;
  

  constructor() { }

  ngOnInit(): void {
 
  }

  toggle(){
    this.isActive=!this.isActive;
  }
}
