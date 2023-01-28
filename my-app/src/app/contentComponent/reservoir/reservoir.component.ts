import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Bounds } from 'src/app/interface/bounds';
import { Reservoir } from 'src/app/interface/reservoir';
import { ReservoirService } from 'src/app/services/reservoir.service';

@Component({
  selector: 'app-reservoir',
  templateUrl: './reservoir.component.html',
  styleUrls: ['./reservoir.component.css'],
})
export class ReservoirComponent implements OnChanges {
  @Input() reservoir: Reservoir = {
    name: 'name 1',
    volume: 900,
  };
  constructor(private service: ReservoirService) {}

  ngOnChanges(): void {}
}
