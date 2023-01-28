import { Component, Input, OnInit } from '@angular/core';
import { IReservoir } from 'src/app/models/reservoir';
import { BordersService } from 'src/app/services/borders.service';

@Component({
  selector: 'app-reservoir',
  templateUrl: './reservoir.component.html',
  styleUrls: ['./reservoir.component.css'],
})
export class ReservoirComponent {
  @Input() reservoir: IReservoir;

  constructor(private borderService: BordersService) {}

  getBorder(border: string): number {
    if (border === 'left') {
      return this.borderService.getLeftB();
    } else {
      return this.borderService.getRightB();
    }
  }
}
