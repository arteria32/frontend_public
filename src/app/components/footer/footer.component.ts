import {Component, Input, OnInit} from '@angular/core';
import {Bounds} from "../top-panel/top-panel.component";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() bounds: Bounds = new Bounds();
  constructor() { }

  ngOnInit(): void {
  }

}
