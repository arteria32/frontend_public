import { Component } from '@angular/core';
import { BorderService } from 'src/app/services/borders.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent  {
  constructor(private borderService: BorderService) { }

  onClick() {
    this.borderService.changeValues();
  }

  setBoundaryValue(i:number) {
    return this.borderService.currentAcceptableValue[i];
  }
  
}
