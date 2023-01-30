import { Component, Input } from '@angular/core';
import { UserInputService } from 'src/app/services/userInput.service';
@Component({
  selector: 'app-reservoir',
  templateUrl: './reservoir.component.html',
  styleUrls: ['./reservoir.component.css']
})
export class ReservoirComponent {
  @Input() value: number = 0;
  @Input() name: string = '';
  @Input() min: number = 200;
  @Input() max: number = 800;

  constructor(private userInputService: UserInputService) { }
  
  setBoundaryValue(index:number) {
    // return this.userInputService.currentAcceptableValue[index];
  }
}
