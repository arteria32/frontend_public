import {Component, Input, OnInit} from '@angular/core';
import {Reservoir} from "../../models/reservoir";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() reservoir: Reservoir = new Reservoir();

  constructor() { }

  ngOnInit(): void {
  }

}
