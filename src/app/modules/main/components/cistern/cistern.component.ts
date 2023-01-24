// Angular
import { Component, Input } from '@angular/core';

// Types
import { Reservoir } from 'src/app/types/reservoir';

// Services
import { FrontierService } from 'src/app/services/frontier.service';

@Component({
  selector: 'cistern',
  templateUrl: './cistern.component.html',
  styleUrls: ['./cistern.component.css'],
})
export class CisternComponent {
  @Input() reservoir: Reservoir = { name: '', volume: 0 };

  constructor(private frontierService: FrontierService) {}

  roundFilling(volume: number) {
    return `${Math.ceil(volume / 10)}%`;
  }

  getCisternName(name: string) {
    return name.toLowerCase();
  }

  getFrontierValue(index: number): number {
    return this.frontierService.getFrontierValue(index);
  }
}
