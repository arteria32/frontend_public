import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reservoir',
  templateUrl: './reservoir.component.html',
  styleUrls: ['./reservoir.component.css']
})

export class ReservoirComponent {
  @Input() value: number = 0;
  @Input() name: string = '';
  @Input() min: number = 0;
  @Input() max: number = 0;

  constructor() { }
  
}
