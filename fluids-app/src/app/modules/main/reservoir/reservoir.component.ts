import { Component, OnInit } from '@angular/core';
import { BorderService } from 'src/app/services/borders.service';
@Component({
  selector: 'app-reservoir',
  templateUrl: './reservoir.component.html',
  styleUrls: ['./reservoir.component.css']
})
export class ReservoirComponent {

  constructor(private borderService: BorderService) { }
  setBoundaryValue(index:number) {
    return this.borderService.currentAcceptableValue[index];
  }


}
