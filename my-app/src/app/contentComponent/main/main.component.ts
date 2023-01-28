import { Component, Input } from '@angular/core';
import { Bounds } from 'src/app/interface/bounds';
import { Reservoir } from 'src/app/interface/reservoir';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  @Input() reservoirs: Reservoir[];
  @Input() bounds: Bounds;
}
