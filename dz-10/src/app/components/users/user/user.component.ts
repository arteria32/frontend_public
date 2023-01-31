import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() name: string = '';
  @Input() email: string = '';
  @Input() website: string = '';
  @Input() company: string = '';
  @Input() city: string = '';

  public condition:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.condition=!this.condition;
}
}
