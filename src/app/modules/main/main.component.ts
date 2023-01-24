// Components
import { Component, OnInit } from '@angular/core';

// Services
import { ReservoirService } from 'src/app/services/reservoir.service';

// Types
import { Reservoir } from 'src/app/types/reservoir';

@Component({
  selector: 'main-comp',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  reservoirs: Reservoir[] = [];

  constructor(
    private reservoirService: ReservoirService,
  ) {}

  ngOnInit() {
    this.reservoirs = this.reservoirService.getReservoirs();
  }
}
