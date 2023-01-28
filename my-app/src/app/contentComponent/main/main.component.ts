import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Bounds } from 'src/app/interface/bounds';
import { Reservoir } from 'src/app/interface/reservoir';
import { ReservoirService } from 'src/app/services/reservoir.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnChanges {
  reservoirs: Reservoir[] = [];
  @Input() bounds: Bounds;

  constructor(private service: ReservoirService) {
    service.rese.subscribe((result) => {
      this.reservoirs = result;
      for (let reservoir of this.reservoirs) {
        reservoir.borderType = this.service.boundsType(
          reservoir.volume,
          this.bounds.leftBound,
          this.bounds.rightBound
        );
      }
    });
  }

  ngOnChanges(): void {
    for (let reservoir of this.reservoirs) {
      reservoir.borderType = this.service.boundsType(
        reservoir.volume,
        this.bounds.leftBound,
        this.bounds.rightBound
      );
    }
  }
}
