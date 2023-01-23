import {Component} from '@angular/core';
import {ReservoirsService} from "../services/reservoirs.service";
import {Reservoir} from "./models/reservoir";
import {Bounds} from "./components/top-panel/top-panel.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bounds: Bounds = {
    topLine: 800,
    bottomLine: 200
  }
  title = 'dz-9-app';
  reservoirs: Reservoir[] = [];

  constructor(private reservoirsService: ReservoirsService) {
    this.uploadReservoirs();
  }

  uploadReservoirs(): void {
    this.reservoirsService.getReservoirs().subscribe((reservoirs: Reservoir[]) => {
      this.reservoirs = reservoirs;
      this.recountReservoirsVolumeCorrectness();
    })
  }

  changeBounds(bounds: Bounds) {
    this.bounds = bounds;
    this.recountReservoirsVolumeCorrectness();
  }

  private recountReservoirsVolumeCorrectness(): void {
    this.reservoirs.forEach((reservoir: Reservoir) => {
      reservoir.isCorrectVolume = reservoir.volume > this.bounds.bottomLine && reservoir.volume < this.bounds.topLine;
    });
  }
}
