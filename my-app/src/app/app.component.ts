import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
} from '@angular/core';
import { Bounds } from './interface/bounds';
import { Reservoir } from './interface/reservoir';
import { ReservoirService } from './services/reservoir.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  reservoirs: Reservoir[] = [];
  bounds: Bounds = {
    leftBound: 200,
    rightBound: 800,
  };
  constructor(private service: ReservoirService) {}

  updateData(reservoirs: Reservoir[]): void {
    this.reservoirs = reservoirs;
  }

  boundsValue(bounds: Bounds) {
    this.bounds = bounds;
  }
}
