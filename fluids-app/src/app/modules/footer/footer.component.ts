import { Component } from '@angular/core';
import { UserInputService } from 'src/app/services/userInput.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  constructor(public userInputService: UserInputService) { }

  changeValues() { //переназови changeValues
    this.userInputService.setValues(); //getVal

  }

  // setBoundaryValue(index:number) {
  //   return this.userInputService.currentAcceptableValue[index];
  // }
  
}
