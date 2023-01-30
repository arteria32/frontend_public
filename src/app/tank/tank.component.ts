import { Component, Input } from '@angular/core';
import { Reservoir } from '../app.module';
import { Validator } from '../services/validator.service';

@Component({
  selector: 'app-tank',
  templateUrl: './tank.component.html',
  styleUrls: ['./tank.component.scss'],
})
export class TankComponent {
  constructor(public validator: Validator) {}
  @Input() tank: Reservoir;
}
